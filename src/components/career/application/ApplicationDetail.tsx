'use client';

import FormSubmit from "@/components/modal/FormSubmit";
import {useEffect, useState} from "react";
import api from "@/lib/api";
import {useRouter} from "next/navigation";

interface Props {
  id: string
}

export default function ApplicationDetail({id}: Props) {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [contentLabel, setContentLabel] = useState<string>('');
  const openModal = (label: string) => {
    setModalOpen(true);
    setContentLabel(label);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  const [detailInfo, setDetailInfo] = useState({
    recruitSubject: '',
    recruitDescription: '',
  });
  async function getDetail() {
    try {
      const response = await api.get(`/admin/recruit/getRecruitDetail.php?ID=${id}`);
      if(response?.data?.result) {
        setDetailInfo(response?.data?.list[0]);
      } else {
        alert('API Load Failure');
      }
    } catch {
      alert('Server Error');
    }
  }

  useEffect(() => {
    getDetail();
  }, []);


  return (
    <>
      <div className="application">
        <div className="application-header">
          <h2>{detailInfo?.recruitSubject}</h2>
        </div>
        <section className="employment-detail">
          <div dangerouslySetInnerHTML={{
            __html: detailInfo?.recruitDescription
          }} />
          <button onClick={() => router.back()}>목록으로 돌아가기</button>
        </section>
        <section className="buttons">
          <button onClick={() => openModal(detailInfo?.recruitSubject)}>지원서 제출</button>
        </section>
      </div>
      <FormSubmit isOpen={modalOpen} onRequestClose={closeModal} contentLabel={contentLabel} id={id}/>
    </>
  )
}
