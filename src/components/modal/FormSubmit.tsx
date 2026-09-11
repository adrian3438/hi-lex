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
    maxWidth: "800px",
    height: 'auto',
    maxHeight: '90vh',
    overflowY: 'auto' as const,
    transform: 'translate(-50%, -50%)',
    zIndex: '9999',
    padding: '35px 40px 0 40px',
  },
};

// 첨부파일 : MS Word 문서만 허용
const ALLOWED_FILE_EXTENSIONS = ['doc', 'docx'];
const ALLOWED_FILE_ACCEPT = '.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document';

function isWordFile(file: File) {
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  return ALLOWED_FILE_EXTENSIONS.includes(ext);
}

// 숫자만 남기기 (연락처는 앞자리 0을 유지해야 하므로 그대로 사용)
function onlyDigits(value: string) {
  return String(value).replace(/[^0-9]/g, '');
}

// 금액용 - 숫자만 남기고 불필요한 앞자리 0 제거
function toNumber(value: string) {
  return onlyDigits(value).replace(/^0+(?=\d)/, '');
}

// 금액용 - 천 단위 콤마 표기
function addComma(value: string) {
  return toNumber(value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 나이 : 만 19세 ~ 만 70세
const AGE_OPTIONS = Array.from({length: 70 - 19 + 1}, (_, i) => 19 + i);

// 최종학력 : S1 ~ S5
const EDUCATION_OPTIONS = [
  {value: 'S1', label: '중학교 졸업'},
  {value: 'S2', label: '고등학교 졸업'},
  {value: 'S3', label: '대학교 졸업'},
  {value: 'S4', label: '대학원 졸업'},
  {value: 'S5', label: '박사'},
];

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
  applicantSex: string;
  applicantAge: string;
  applicantCareer: string;
  applicantEducationLevel: string;
  applicantExpectedSalary: string;
}

export default function FormSubmit({isOpen, onRequestClose, contentLabel, id}: Props) {
  const [data, setData] = useState<FormData>({
    attachedFile: null,
    applicantName: '',
    applicantMobile: '',
    applicantSex: 'M',
    applicantAge: '',
    applicantCareer: '',
    applicantEducationLevel: '',
    applicantExpectedSalary: '',
  });

  function handleChange(e: any) {
    const {name, value} = e.target;
    if (name === 'applicantMobile') {
      setData((prev: any) => ({...prev, [name]: onlyDigits(value)}));
      return;
    }
    if (name === 'applicantExpectedSalary') {
      setData((prev: any) => ({...prev, [name]: addComma(value)}));
      return;
    }
    setData((prev: any) => ({...prev, [name]: value}));
  }

  function handleFile(e: any) {
    const {name, files} = e.target;
    if (files[0] && !isWordFile(files[0])) {
      alert('MS Word(.doc, .docx) 파일만 등록 가능합니다.');
      e.target.value = '';
      setData((prev: any) => ({...prev, [name]: null}));
      return;
    }
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
    } else if (!isWordFile(data.attachedFile)) {
      alert('MS Word(.doc, .docx) 파일만 등록 가능합니다.');
      return;
    } else if (!data.applicantName) {
      alert('이름은 필수입니다.');
      return;
    } else if (!data.applicantMobile) {
      alert('연락처는 필수입니다.');
      return;
    } else if (!data.applicantSex) {
      alert('성별은 필수입니다.');
      return;
    } else if (!data.applicantAge) {
      alert('나이는 필수입니다.');
      return;
    } else if (!data.applicantEducationLevel) {
      alert('최종학력은 필수입니다.');
      return;
    } else if (!data.applicantExpectedSalary) {
      alert('희망연봉은 필수입니다.');
      return;
    }

    const formData = new FormData;
    formData.append('recruitId', id);
    formData.append('applicantName', data?.applicantName);
    formData.append('applicantMobile', data?.applicantMobile);
    formData.append('applicantSex', data?.applicantSex);
    formData.append('applicantAge', data?.applicantAge);
    formData.append('applicantCareer', data?.applicantCareer);
    formData.append('applicantEducationLevel', data?.applicantEducationLevel);
    formData.append('applicantExpectedSalary', toNumber(data?.applicantExpectedSalary)); // 콤마 제거 후 전송
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
              <div className="file full">
                <label htmlFor="fileUpload">파일 업로드하기</label>
                <input type="file" id="fileUpload" name="attachedFile" accept={ALLOWED_FILE_ACCEPT} onChange={(e) => handleFile(e)}/>
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
                <input type="text" id="phone" name="applicantMobile" maxLength={11} inputMode="numeric" placeholder="숫자만 입력" value={data?.applicantMobile} onChange={(e) => handleChange(e)}/>
                <button name="mobileReset" onClick={(e) => handelReset(e)}>X</button>
              </div>
              <div className="sex">
                <span className="field-label">성별</span>
                <div className="radio-group">
                  <input type="radio" id="sexMale" name="applicantSex" value="M" checked={data?.applicantSex === 'M'} onChange={(e) => handleChange(e)}/>
                  <label htmlFor="sexMale">남자</label>
                  <input type="radio" id="sexFemale" name="applicantSex" value="F" checked={data?.applicantSex === 'F'} onChange={(e) => handleChange(e)}/>
                  <label htmlFor="sexFemale">여자</label>
                </div>
              </div>
              <div className="no-reset">
                <label htmlFor="inputAge">나이</label>
                <select id="inputAge" name="applicantAge" value={data?.applicantAge} onChange={(e) => handleChange(e)}>
                  <option value="">선택하세요</option>
                  {AGE_OPTIONS.map((age) => (
                    <option key={age} value={age}>만 {age}세</option>
                  ))}
                </select>
              </div>
              <div className="no-reset">
                <label htmlFor="inputEducationLevel">최종학력</label>
                <select id="inputEducationLevel" name="applicantEducationLevel" value={data?.applicantEducationLevel} onChange={(e) => handleChange(e)}>
                  <option value="">선택하세요</option>
                  {EDUCATION_OPTIONS.map((education) => (
                    <option key={education.value} value={education.value}>{education.label}</option>
                  ))}
                </select>
              </div>
              <div className="salary">
                <label htmlFor="inputExpectedSalary">희망연봉</label>
                <input type="text" id="inputExpectedSalary" name="applicantExpectedSalary" maxLength={11} inputMode="numeric" placeholder="예) 3,500" value={data?.applicantExpectedSalary} onChange={(e) => handleChange(e)}/>
                <span className="unit">만원</span>
              </div>
              <div className="no-reset full">
                <label htmlFor="inputCareer">경력사항</label>
                <input type="text" id="inputCareer" name="applicantCareer" maxLength={200} placeholder="예) 신입 / OO회사 생산관리 3년" value={data?.applicantCareer} onChange={(e) => handleChange(e)}/>
              </div>
            </div>
            <div className="form-detail-bottom">
              <p>* MS Word(.doc, .docx) 파일만 업로드 가능합니다.</p>
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
