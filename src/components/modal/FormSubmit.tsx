import Modal from 'react-modal';
import '@/app/assets/modal.scss';
import React, {useState} from "react";
import api from "@/lib/api";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '100%',
    maxWidth: "960px",
    height: 'auto',
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    padding: '35px 40px 0 40px',
  },
};

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string
  id: string;
}

interface FormData {
  attachedFile: File | null;
  applicantName: string;
  applicantMobile: string;
}

export default function FormSubmit({isOpen, onRequestClose, contentLabel, id}: Props) {
  const [data, setData] = useState<FormData>({
    attachedFile: null,
    applicantName: '',
    applicantMobile: '',
  });

  function handleChange(e: any) {
    const {name, value} = e.target;
    setData((prev: any) => ({...prev, [name]: value}));
  }

  function handleFile(e: any) {
    const {name, files} = e.target;
    const reader = new FileReader()
    if(files[0]) {reader.readAsDataURL(files[0])}
    reader.onload = () => {
      setData((prev:any) => ({...prev, [name] : files[0]}));
    }
  }

  function handelReset(e: any) {
    switch (e.target.name) {
      case 'nameReset':
        setData((prev: any) => ({...prev, ['applicantName']: ''}));
        break;
      case 'mobileReset':
        setData((prev: any) => ({...prev, ['applicantMobile']: ''}));
        break;
      case 'fileReset':
        setData((prev: any) => ({...prev, ['attachedFile']: null}));
        break;
    }
  }

  async function submit() {
    if (!data.attachedFile) {
      alert('파일 업로드는 필수입니다.');
      return;
    } else if (!data.applicantName) {
      alert('이름은 필수입니다.');
      return;
    } else if (!data.applicantMobile) {
      alert('연락처는 필수입니다.');
      return;
    }

    const formData = new FormData;
    formData.append('recruitId', id);
    formData.append('applicantName', data?.applicantName);
    formData.append('applicantMobile', data?.applicantMobile);
    formData.append('attachedFile', data?.attachedFile);
    try {
      const response = await api.post('/user/recruit/setRecruitApply.php', formData);
      if (response?.data?.result) {
        alert(response?.data?.resultMsg);
        location.reload();
      } else {
        alert(response?.data?.resultMsg);
        location.reload();
      }
    } catch {
      alert('Server Error');
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      shouldCloseOnEsc={false}
    >
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="form-detail">
            <div className="form-detail-header">
              <h3>내 입사지원서 제출하기</h3>
              <p>{contentLabel}</p>
            </div>
            <div className="form-detail-info">
              <div className="file">
                <label htmlFor="fileUpload">파일 업로드하기</label>
                <input type="file" id="fileUpload" name="attachedFile" onChange={(e) => handleFile(e)}/>
                <div>{data.attachedFile?.name}</div>
                <button name="fileReset" onClick={(e) => handelReset(e)}>X</button>
              </div>
              <div>
                <label htmlFor="inputName">이름</label>
                <input type="text" id="inputName" name="applicantName" value={data?.applicantName} onChange={(e) => handleChange(e)}/>
                <button name="nameReset" onClick={(e) => handelReset(e)}>X</button>
              </div>
              <div>
                <label htmlFor="phone">연락처</label>
                <input type="text" id="phone" name="applicantMobile" value={data?.applicantMobile} onChange={(e) => handleChange(e)}/>
                <button name="mobileReset" onClick={(e) => handelReset(e)}>X</button>
              </div>
            </div>
            <div className="form-detail-bottom">
              <p>* 파일명에 지원자 이름을 넣어주세요.</p>
              <p>* 서류 합격자에 한하여 별도 연락드립니다.</p>
              <p>* 기타 궁금한 사항은 문의하기를 이용해 주세요.</p>
              <div>
                <button onClick={onRequestClose}>취소</button>
                <button onClick={() => submit()}>제출</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
