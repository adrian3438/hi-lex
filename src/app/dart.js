export default async function handler(req, res) {
    const { corp_code } = req.query; // 사용자가 조회할 기업 코드
  
    if (!corp_code) {
      return res.status(400).json({ error: "corp_code is required" });
    }
  
    const API_KEY = process.env.DART_API_KEY; // 환경변수에서 API 키 로드
    const url = `https://opendart.fss.or.kr/api/company.json?crtfc_key=${API_KEY}&corp_code=${corp_code}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.status === "000") {
        res.status(200).json(data);
      } else {
        res.status(500).json({ error: data.message });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data from OpenDART" });
    }
  }