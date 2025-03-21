'use client'
import React, {useState} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';
import {map} from './maps-data';
import MapInfo from "@/components/modal/MapInfo";

export interface Props {
  address: string;
  google: any
}

interface CodeType {
  lat: number,
  lng: number
}

/*interface MapType {
  countryCode : number
  currentCode : CodeType
  moveCode : CodeType
  zoom : number
  storeCount : number
  currentZoom : number
}*/
export const GoogleMaps: React.FC<Props> = ({}) => {
  const [america, setAmerica] = useState(false);
  const [europe, setEurope] = useState(false);
  const [asia, setAsia] = useState(false);

  const [center, setCenter] = useState<{ lat: number, lng: number }>({lat: 0, lng: 0});
  const [zoom, setZoom] = useState<number>(2)
  const [country, setCountry] = useState<number>(0)

  const [mapModalOpen, setMapModalOpen] = useState(false);
  const [mapInfo, setMapInfo] = useState({});

  function handleMove(moveCode: CodeType, zoom: number, countryCode: number, info: any, menuClick?: boolean) {
    /*setMapModalOpen(true);
    setMapInfo(info);
    setCenter({lat: moveCode.lat, lng: moveCode.lng})
    setZoom(zoom);
    setCountry(countryCode);
    return;*/
    if(menuClick) {
      setMapModalOpen(true);
      setMapInfo(info);
      setCenter({lat: moveCode.lat, lng: moveCode.lng})
      setZoom(zoom);
      setCountry(countryCode);
      return;
    } else {
      if(zoom === 0) {
        setMapModalOpen(true);
        setMapInfo(info);
        return;
      }else{
        setCenter({lat : moveCode.lat , lng : moveCode.lng})
        setZoom(zoom); setCountry(countryCode);
      }
    }

  }

  const closeModal = () => {
    setMapModalOpen(false);
  };


  function Clear() {
    setCenter({lat: 0, lng: 0})
    setZoom(2);
    setCountry(0);
  }

  return (
    <>
      <button onClick={Clear} className="init-btn">World Map</button>
      <GoogleMap
        options={{disableDefaultUI: true, styles: myStyles}}
        mapContainerStyle={{width: '100%', height: '100%'}}
        center={center}
        zoom={zoom}
      >
        {map?.map((map: any, index: number) => {
          const isDisplay = country === 0 ?
            zoom === map.currentZoom :
            zoom === map.currentZoom && country === map.countryCode;
          return (
            <>
              {isDisplay ?
                <Marker
                  key={`${map?.countryCode}-${index}`}
                  label={{text: map.storeCount !== 0 ? map.storeCount.toString() : 'F', color: 'white'}}
                  position={{lat: map.currentCode.lat, lng: map.currentCode.lng}}
                  icon={redSquareIcon}
                  title={map?.name}
                  onClick={() => handleMove(map.moveCode, map.zoom, map.countryCode, map.info)}
                /> : ''
              }
            </>
          )
        })}
        <div className="continent">
          <ul>
            <li className={america ? 'on' : ''}>
              <p onClick={() => america ? setAmerica(false) : setAmerica(true)}>America</p>
              <ul>
                <li>
                  <p>U.S.A</p>
                  <ul>
                    <li onClick={() => handleMove(
                        {lat: 42.471867, lng: -83.091585},
                        5,
                        3, {
                        title: "Hi-Lex Controls Inc. Warren Plant (U.S.A.)",
                        address2: "",
                        address: "1420 E. 10Mile Road, Suite 250, Hazel Park, 48030, U.S.A.",
                        tel: "1-313-261-2950",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CONTROLS INC., WARREN PLANT USA.webp"
                      }, true)}>Hi-Lex Controls Inc. Warren Plant (U.S.A.)
                    </li>
                    <li onClick={() => handleMove(
                      { lat: 32.734761, lng: -85.29462 },
                      5,
                      3, {
                        title: "Daedong Hi-Lex Of America, Inc.",
                        address2: "",
                        address: "1195 Cr177, Cusseta, Alabama, 36852, U.S.A.",
                        tel: "1-334-756-5300",
                        fax: "1-334-756-5301",
                        established: "Jun., 2008",
                        netSales: "90 million US $",
                        employee: "106",
                        image: "/images/sub/company/affiliate/DAEDONG HI-LEX OF AMERICA INC USA.webp"
                      }, true)}>Daedong Hi-Lex Of America, Inc.</li>
                    <li onClick={() => handleMove(
                      { lat: 42.642511, lng: -83.191007 },
                      8,
                      3, {
                        title: "Hi-Lex Automotive Center (U.S.A.)",
                        address2: "",
                        address: "2911 Research Drive Rochester Hills, Michigan 48309 U.S.A.",
                        tel: "1-248-267-3800",
                        fax: "1-267-756-3889",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX AUTOMOTIVE CENTER USA.webp"
                      }, true)}>Hi-Lex Automotive Center (U.S.A.)</li>
                    <li onClick={() => handleMove(
                      { lat: 42.471867, lng: -83.091585 },
                      8,
                      3, {
                        title: "Hi-Lex Controls Inc. Warren Plant (U.S.A.)",
                        address2: "",
                        address: "1420 E. 10Mile Road, Suite 250, Hazel Park, 48030, U.S.A.",
                        tel: "1-313-261-2950",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CONTROLS INC., WARREN PLANT USA.webp"
                      }, true)}>Hi-Lex Controls Inc. Warren Plant (U.S.A.)</li>
                    <li onClick={() => handleMove(
                      { lat: 42.337446, lng: -85.282755 },
                      8,
                      3, {
                        title: "Hi-Lex America, Inc (U.S.A.)",
                        address2: "",
                        address: "5200 Wayne Road, Battle Creek, Michgan 49037, U.S.A.",
                        tel: "1-269-968-0781",
                        fax: "1-269-968-0885",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX AMERICA INC USA.webp"
                      }, true)}>Hi-Lex America, Inc (U.S.A.)</li>
                    <li onClick={() => handleMove(
                      { lat: 42.035948, lng: -84.766337 },
                      8,
                      3, {
                        title: "Hi-Lex Controls Inc (U.S.A.)",
                        address2: "",
                        address: "152 Simpson Drive, Litchfield, Michigan 49252 U.S.A.",
                        tel: "1-517-542-2955",
                        fax: "1-517-542-2594",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CONTROLS INC USA.webp"
                      }, true)}>Hi-Lex Controls Inc (U.S.A.)</li>
                    <li onClick={() => handleMove(
                      { lat: 41.854158, lng: -84.327281 },
                      8,
                      3, {
                        title: "Hi-Lex Controls Inc. Hudson (U.S.A.)",
                        address2: "",
                        address: "15780 Steger Drive Hudson Michigan 49247",
                        tel: "1-517-448-2752(Main)",
                        fax: "1-517-448-2753",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CONTROLS INC. HUDSON USA.webp"
                      }, true)}>Hi-Lex Controls Inc. Hudson (U.S.A.)</li>
                  </ul>
                </li>
                <li>
                  <p>Mexico</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 25.704638, lng: -100.134274 },
                      6,
                      10, {
                        title: "HI-LEX DAEDONG DOOR MÉXICO (MEXICO)",
                        address2: "Carretera Apodaca a Villa Juárez 8456, interior 7 y 8,",
                        address: "Dulces Nombres Industrial Park, Apodaca, N.L, C.P 66647, Mexico",
                        tel: "",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/daedong-door-mexico-factory.jpg"
                      }, true)}>HI-LEX DAEDONG DOOR MÉXICO (MEXICO)</li>
                    <li onClick={() => handleMove(
                      { lat: 25.252940, lng: -101.118632 },
                      6,
                      10, {
                        title: "HI-LEX CONTROLS DE MÉXICO (MEXICO)",
                        address2: "Salva Industrial Park Derramamadero Carretera a General Cepeda",
                        address: "#2731 KM 2+700,25324 Agua Nueva, Coah Mexico",
                        tel: "",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CONTROLS DE MÉXICO.webp"
                      }, true)}>HI-LEX CONTROLS DE MÉXICO (MEXICO)</li>
                    <li onClick={() => handleMove(
                      { lat: 20.622191, lng: -100.402024 },
                      11,
                      10, {
                        title: "HI-LEX CONTROLS DE MÉXICO (MEXICO)",
                        address2: "Salva Industrial Park Derramamadero Carretera a General Cepeda",
                        address: "#2731 KM 2+700,25324 Agua Nueva, Coah Mexico",
                        tel: "",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CONTROLS DE MÉXICO.webp"
                      }, true)}>HI-LEX MEXICANA S.A. DE C.V. (MEXICO)</li>
                    <li onClick={() => handleMove(
                      { lat: 20.559623, lng: -100.25774 },
                      11,
                      10, {
                        title: "HI-LEX MEXICANA S.A. DE C.V. PLANTA EL MARQUÉS (MEXICO)",
                        address2: "",
                        address: "Circuito El Marqués Sur No. 18, Fracc. Parque Industrial El Marqués Ampliación, 76246 Querétaro, Qro., Mexico",
                        tel: "52-(442)-238-4100",
                        fax: "52-(442)-220-8377",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX MEXICANA S.A. DE C.V. PLANTA EL MARQUÉS.webp"
                      }, true)}>HI-LEX MEXICANA S.A. DE C.V. PLANTA EL MARQUÉS (MEXICO)</li>
                  </ul>
                </li>
                <li>
                  <p>Brazil</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: -23.252807, lng: -47.34812},
                      6,
                      11, {
                        title: "HI-LEX DO BRAZIL LTDA.(BRAZIL)",
                        address2: "",
                        address: "Alameda Ulderico Ferrari, 100 - Itaim Guacu ITU/SP Cep 13312-655, Brazil",
                        tel: "55(11)40130055",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX DO BRAZIL LTDA..webp"
                      }, true)}>HI-LEX DO BRAZIL LTDA.(BRAZIL)</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={europe ? 'on' : ''}>
              <p onClick={() => europe ? setEurope(false) : setEurope(true)}>Europe</p>
              <ul>
                <li>
                  <p>GERMANY</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 50.01899, lng: 10.2187080 },
                      6,
                      12, {
                        title: "HI-LEX EUROPE GMBH (GERMANY)",
                        address2: "",
                        address: "Athenstrasse 2, 97424 Schweinfurt, Germany",
                        tel: "49(9721)388840",
                        fax: "49(9721)6489444",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX EUROPE GMBH.webp"
                      }, true)}>HI-LEX EUROPE GMBH (GERMANY)</li>
                  </ul>
                </li>
                <li>
                  <p>CZECHIA</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 50.438430, lng: 13.592473 },
                      6,
                      13, {
                        title: "HI-LEX CZECH, S.R.O. (CZECHIA)",
                        address2: "",
                        address: "Industrial Zone Joseph 163 Havran 435, 01 Czech Republic",
                        tel: "420(472)769202",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX CZECH, S.R.O..webp"
                      }, true)}>HI-LEX CZECH, S.R.O. (CZECHIA)</li>
                  </ul>
                </li>
                <li>
                  <p>Hungary</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 47.915895, lng: 19.116703 },
                      8,
                      4, {
                        title: "Hi-Lex Hungary Kft",
                        address2: "",
                        address: "Ipari Park 3 Retsag 2651 Hungary",
                        tel: "+36-35-551-200",
                        fax: "+36-35-551-201",
                        established: "Jul., 2006",
                        netSales: "16 million US $",
                        employee: "156",
                        image: "/images/sub/company/affiliate/HI-LEX HUNGARY CABLE SYSTEM MANUFACTURING LLC.webp"
                      }, true)}>Hi-Lex Hungary Kft</li>
                  </ul>
                </li>
                <li>
                  <p>SERBIA</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 45.000383, lng: 19.616280 },
                      6,
                      16, {
                        title: "HI-LEX SERBIA D.O.O. (SERBIA)",
                        address2: "",
                        address: "Dimitrija Davidovica BB, 22000 Sremska Mitrovica, Serbia",
                        tel: "38(122)2150226",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HHI-LEX SERBIA D.O.O..webp"
                      }, true)}>HI-LEX SERBIA D.O.O. (SERBIA)</li>
                  </ul>
                </li>
                <li>
                  <p>ITALY</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 44.332079, lng: 9.322674 },
                      6,
                      14, {
                        title: "HI-LEX ITALY S.P.A. (ITALY)",
                        address2: "",
                        address: "Via San Rufino 29, 16043 Chiavari (GE) Italy",
                        tel: "39(185)368905",
                        fax: "39(185)368983",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX ITALY S.P.A..webp"
                      }, true)}>HI-LEX ITALY S.P.A. (ITALY)</li>
                  </ul>
                </li>
                <li>
                  <p>SPAIN</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 40.513271, lng: -3.774368 },
                      6,
                      15, {
                        title: "HI-LEX AUTO PARTS SPAIN, S.L (SPAIN)",
                        address2: "",
                        address: "Londres 20, Granollers 08401, Barcelona, Spain",
                        tel: "34(93)5809835",
                        fax: "34(93)6916374",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX AUTO PARTS SPAIN, S.L.webp"
                      }, true)}>HI-LEX AUTO PARTS SPAIN, S.L (SPAIN)</li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={asia ? 'on' : ''}>
              <p onClick={() => asia ? setAsia(false) : setAsia(true)}>Asia</p>
              <ul>
                <li>
                  <p>Korea</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 37.420363, lng: 126.708536 },
                      13,
                      2, {
                        title: "Daedong System Co., Ltd.",
                        address2: "{3LT,3BL,NAMDONG COMPLEX}",
                        address: "419, Namdong-daero, Namdong-gu, Incheon, 21629 Korea",
                        tel: "82(32)818-7631",
                        fax: "82(32)813-7636",
                        established: " Jul., 2003",
                        netSales: "111 million US $",
                        employee: "214",
                        image: "/images/sub/company/affiliate/Daedong Systam Namdong.png"
                      }, true)}>Daedong System Co., Ltd.</li>
                    <li onClick={() => handleMove(
                      { lat: 37.391895, lng: 126.697892 },
                      13,
                      2, {
                        title: "Daedong Hi-Lex Inc.",
                        address2: "{ 5LT,151BL,NAMDONG COMPLEX }",
                        address: "43, Namdongdong-ro 78beon-gil, Namdong-gu, Incheon, 21692 Korea",
                        tel: "82(32)818-7631",
                        fax: "82(32)813-763",
                        established: " Jul., 2003",
                        netSales: "111 million US $",
                        employee: "214",
                        image: "/images/sub/company/affiliate/DAEDONG HI-LEX INC..webp"
                      }, true)}>Daedong Hi-Lex Inc.</li>
                    <li onClick={() => handleMove(
                      { lat: 37.373790, lng: 126.646843},
                      13,
                      2, {
                        title: "Daedong Door Co., Ltd. 2nd Factory (Plastic Injection)",
                        address2: "",
                        address: "11-63, Songdo-dong, Yeonsu-gu, Incheon, South Korea",
                        tel: "82(32)716-9480",
                        fax: "82(32)716-9484",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Daedong Door 2nd plant.png"
                      }, true)}>Daedong Door Co., Ltd. 2nd Factory (Plastic Injection)</li>
                    <li onClick={() => handleMove(
                      { lat: 37.361176, lng: 126.653142 },
                      13,
                      2, {
                        title: "Daedong Door Co., Ltd.",
                        address2: "",
                        address: "64, Cheomdan-daero 124beon-gil, Yeonsu-gu, Incheon, South Korea",
                        tel: "82(32)818-7631",
                        fax: "82(32)818-7636",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/DAEDONG DOOR INC..webp"
                      }, true)}>Daedong Door Co., Ltd.</li>
                    <li onClick={() => handleMove(
                      { lat: 36.976806, lng: 126.845838 },
                      14,
                      2, {
                        title: "Daedong Door Hi-Lex Inc.",
                        address2: "",
                        address: "21, Pyeongtaekhang-ro 184beon-gil, Poseung-eup, Pyeongtaek-si, Gyeonggi-do, 17959 Korea",
                        tel: "82(31)680-8200",
                        fax: "FAX: 82(32)499-4155",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Daedong Door Hi-Lex Inc Pyeongtaehang.jpg"
                      }, true)}>Daedong Door Hi-Lex Inc.</li>
                    <li onClick={() => handleMove(
                      { lat: 36.973021, lng: 126.857207 },
                      14,
                      2, {
                        title: "Daedong Hi-Lex Inc. (Poseung Plant)",
                        address2: "",
                        address: "169, Poseunggongdansunhwan-ro, Poseung-eup, Pyeongtaek-si, Gyeonggi-do, 17960 Korea",
                        tel: "82(31)686-7674",
                        fax: "82(31)686-7674",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Daedong Door Hi-Lex Inc Poseung Plant.jpg"
                      }, true)}>Daedong Hi-Lex Inc. (Poseung Plant)</li>
                    <li onClick={() => handleMove(
                      { lat: 35.582548, lng: 129.376002 },
                      8,
                      2, {
                        title: "Daedong Hi-Lex Inc. (Ulsan Plant)",
                        address2: "",
                        address: "236, Modulehwa Saneop-ro, Buk-gu, Ulsan, 44246 Korea",
                        tel: "82(52)287-7635",
                        fax: "82(52)287-7636",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Daedong Hi-Lex Inc. Ulsan Plant.png"
                      }, true)}>Daedong Hi-Lex Inc. (Ulsan Plant)</li>
                    <li onClick={() => handleMove(
                      { lat: 35.215162, lng: 128.591787 },
                      8,
                      2, {
                        title: "TSK(Korea)Co., Ltd.",
                        address2: "",
                        address: "89, Jayumuyeok 3-gil, Masanhoewon-gu, Changwon-si, Gyeongsangnam-do, 51338 Korea",
                        tel: "82(55)293-1473",
                        fax: "82(32)813-763",
                        established: "Now., 1972",
                        netSales: "42 million US $",
                        employee: "154",
                        image: "/images/sub/company/affiliate/TSK(KOREA)CO., LTD..webp"
                      }, true)}>TSK(Korea)Co., Ltd.</li>
                    <li onClick={() => handleMove(
                      { lat: 35.119932, lng: 126.775792 },
                      8,
                      2, {
                        title: "Daedong Hi-Lex Inc. (Gwangju Plant)",
                        address2: "",
                        address: "111, Pyeongdongsandan 6beon-ro, Gwangsan-gu, Gwangju, 62453 Korea",
                        tel: "82(62)945-7635",
                        fax: "-",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Daedong Hi-Lex Inc. Gwangju Plant.png"
                      }, true)}>Daedong Hi-Lex Inc. (Gwangju Plant)</li>
                  </ul>
                </li>
                <li>
                  <p>Japan</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 36.5560645, lng: 139.945721 },
                      6,
                      9, {
                        title: "Hi-Lex Utsunomiya Technical Center(Utsunomiya Office)",
                        address2: "",
                        address: "145-6 Shimohiraide-machi, Utsunomiya, Tochigi 321-0903, Japan.",
                        tel: "(028)663-4062",
                        fax: "(028)663-4065",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Utsunomiya Technical Center(Utsunomiya Office).png"
                      }, true)}>Hi-Lex Utsunomiya Technical Center(Utsunomiya Office)</li>
                    <li onClick={() => handleMove(
                      { lat: 36.220445, lng: 139.143910 },
                      6,
                      9, {
                        title: "Hi-Lex Saitama, Inc.",
                        address2: "",
                        address: "100 Kyōei, Honjo, Saitama 367-0037, Japan.",
                        tel: "(0495)21-2611",
                        fax: "(0495)24-0410",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Saitama, Inc..png"
                      }, true)}>Hi-Lex Saitama, Inc.</li>
                    <li onClick={() => handleMove(
                      { lat: 35.4376363, lng: 140.282358 },
                      6,
                      9, {
                        title: "Hi-Lex Kanto, Inc.",
                        address2: "",
                        address: "1520-4 Kobayashi, Mobara, Chiba 297-0074, Japan.",
                        tel: "(0475)24-5155",
                        fax: "(0475)23-2828",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Kanto, Inc..png"
                      }, true)}>Hi-Lex Kanto, Inc.</li>
                    <li onClick={() => handleMove(
                      { lat: 34.7969522, lng: 137.559080 },
                      6,
                      9, {
                        title: "Hi-Lex Mikkabi Plant (Hamamatsu Office)",
                        address2: "",
                        address: "310 Mikkabicho Ushi, Hamana Ward, Hamamatsu, Shizuoka 431-1404, Japan.",
                        tel: "(053)525-2111",
                        fax: "(053)525-0427",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Mikkabi Plant (Hamamatsu Office).png"
                      }, true)}>Hi-Lex Mikkabi Plant (Hamamatsu Office)</li>
                    <li onClick={() => handleMove(
                      { lat: 34.9127066, lng: 132.108657 },
                      6,
                      9, {
                        title: "Hi-Lex Shimane, Inc.",
                        address2: "",
                        address: "1820-16 Shimokoucho, Hamada, Shimane 697-0006, Japan.",
                        tel: "(0855)23-5855",
                        fax: "(0855)23-5890",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Shimane, Inc..png"
                      }, true)}>Hi-Lex Shimane, Inc.</li>
                    <li onClick={() => handleMove(
                      { lat: 35.13340716, lng: 135.06652 },
                      11,
                      9, {
                        title: "Hi-Lex Kaibara Plant",
                        address2: "",
                        address: "1700 Kaibaracho Kaibara, Tamba, Hyogo 669-3309, Japan",
                        tel: "(0795)72-2130",
                        fax: "(0795)72-3549",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Kaibara Plant.png"
                      }, true)}>Hi-Lex Kaibara Plant</li>
                    <li onClick={() => handleMove(
                      { lat: 34.929637, lng: 135.163531 },
                      11,
                      9, {
                        title: "Hi-Lex Sanda-Nishi Plant",
                        address2: "",
                        address: "14-4 Technopark, Sanda, Hyogo, 669-1339, Japan.",
                        tel: "(079)568-2480",
                        fax: "(079)568-2482",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Sanda-Nishi Plant.png"
                      }, true)}>Hi-Lex Sanda-Nishi Plant</li>
                    <li onClick={() => handleMove(
                      { lat: 34.894505, lng: 135.22432 },
                      11,
                      9, {
                        title: "Hi-Lex Sanda Plant",
                        address2: "",
                        address: "4-3-9 Miwa, Sanda, Hyogo 669-1513, Japan.",
                        tel: "(079)563-3001",
                        fax: "(079)563-7264",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Sanda Plant.png"
                      }, true)}>Hi-Lex Sanda Plant</li>
                    <li onClick={() => handleMove(
                      { lat: 34.8096715, lng: 135.346512 },
                      17,
                      9, {
                        title: "Hi-Lex Medical",
                        address2: "",
                        address: "1-chōme-13-25 Sakaemachi, Takarazuka, Hyogo 665-0845, Japan",
                        tel: "(0797)85-2571",
                        fax: "(0797)85-2990",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Medical.png"
                      }, true)}>Hi-Lex Medical</li>
                    <li onClick={() => handleMove(
                      { lat: 34.80952, lng: 135.34699 },
                      17,
                      9, {
                        title: "Hi-Lex Corporation",
                        address2: "",
                        address: "1-12-28 Sakaemachi, Takarazuka City, Hyogo 665-0845, Japan.",
                        tel: "(0797)85-2500",
                        fax: "(0797)83-2474",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/Hi-Lex Corporation Japan 1-12-28 Sakaemachi.png"
                      }, true)}>Hi-Lex Corporation</li>
                  </ul>
                </li>
                <li>
                  <p>China</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 41.814937438214834, lng: 123.43305347205946 },
                      5,
                      1, {
                        title: "HI-LEX AUTOMOTIVE PARTS (SHENYANG) CO.,LTD",
                        address2: "",
                        address: "178-4 Kaifa 22 Road, Shenyang Economic and Technological Development Zone, Liaoning Province, China",
                        tel: "86(024)31550690",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX AUTOMOTIVE PARTS (SHENYANG) CO.,LTD.webp"
                      }, true)}>HI-LEX AUTOMOTIVE PARTS (SHENYANG) CO.,LTD</li>
                    <li onClick={() => handleMove(
                      { lat: 39.13471803493907, lng: 117.12479502386779 },
                      5,
                      1, {
                        title: "TIANJIN HI-LEX CABLE SYSTEM CO.,LTD",
                        address2: "",
                        address: "Plant A01, No.1 Shenzhou Avenue, Binhai Hi-tech District, Tianjin, China",
                        tel: "86(22)25391550",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/TIANJIN HI-LEX CABLE SYSTEM CO.,LTD.webp"
                      }, true)}>TIANJIN HI-LEX CABLE SYSTEM CO.,LTD</li>
                    <li onClick={() => handleMove(
                      { lat: 37.5412330, lng: 121.3110645 },
                      5,
                      1, {
                        title: "YANTAI TSK CABLE SYSTEM CO., LTD.煙台TSK (CHINA)",
                        address2: "",
                        address: "Yantai Export Processing Zone E2 Shangdong-PREF, China",
                        tel: "86(535)6877215",
                        fax: "86(535)6846289",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/YANTAI TSK CABLE SYSTEM CO., LTD..webp"
                      }, true)}>YANTAI TSK CABLE SYSTEM CO., LTD.煙台TSK (CHINA)</li>
                    <li onClick={() => handleMove(
                      { lat: 30.25063618938157, lng: 120.24034322787755 },
                      5,
                      1, {
                        title: "HANGZHOU HI-LEX CABLE SYSTEM CO.,LTD.杭州HI-LEX (CHINA)",
                        address2: "",
                        address: "No. 3998, Jiangdong 3rd Road, Dajiagdong Industry Cluster Zone, Hangzhou, China",
                        tel: "86(571)83811961",
                        fax: "86(571)83811962",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HANGZHOU HI-LEX CABLE SYSTEM CO.,LTD.webp"
                      }, true)}>HANGZHOU HI-LEX CABLE SYSTEM CO.,LTD.杭州HI-LEX (CHINA)</li>
                    <li onClick={() => handleMove(
                      { lat: 23.076111, lng: 113.528750 },
                      5,
                      1, {
                        title: "GUANGZHOU TSK CONTROL CABLE CO., LTD 広州利時徳控制拉索有限公司",
                        address2: "",
                        address: "No. 19 Baoying Road, Guangzhou Free Trade Zone, China",
                        tel: "86(20)82221455",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/GUANGZHOU TSK CONTROL CABLE CO., LTD.webp"
                      }, true)}>GUANGZHOU TSK CONTROL CABLE CO., LTD 広州利時徳控制拉索有限公司</li>
                    <li onClick={() => handleMove(
                      { lat: 22.309313, lng: 114.226436 },
                      5,
                      1, {
                        title: "GUANGDONG HI-LEX CABLE SYSTEM CO., LTD.広東HI-LEX (CHINA)",
                        address2: "",
                        address: "7 Xingxiang Road Xintang Zengcheng-City, Guangzhou, China",
                        tel: "86(20)82686600",
                        fax: "86(20)82683300",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/GUANGDONG HI-LEX CABLE SYSTEM CO., LTD..webp"
                      }, true)}>GUANGDONG HI-LEX CABLE SYSTEM CO., LTD.広東HI-LEX (CHINA)</li>
                    <li onClick={() => handleMove(
                      { lat: 32.07474270587764, lng: 120.69247708141562 },
                      8,
                      1, {
                        title: "JIANGSU DAEDONG DOOR INC. (CHINA)",
                        address2: "",
                        address: "No. 12, Yuefeng Road, Zhangjiagang City, Jiansu, 215600 China",
                        tel: "86(515)89598786",
                        fax: "86(515)89598796",
                        established: "",
                        netSales: "",
                        employee: ""
                      }, true)}>JIANGSU DAEDONG DOOR INC. (CHINA)</li>
                    <li onClick={() => handleMove(
                      { lat: 31.90239124731206, lng: 120.53522562373948 },
                      8,
                      1, {
                        title: "江蘇大同多沃汽車配件有限公司 (DAEDOOG DOOR CHINA)",
                        address2: "",
                        address: "No.68, Yuefeng Road, Zhangjjangang City, Jiangsu Province, China",
                        tel: "",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/daedong-door-china-factory.jpg"
                      }, true)}>江蘇大同多沃汽車配件有限公司 (DAEDOOG DOOR CHINA)</li>
                    <li onClick={() => handleMove(
                      { lat: 29.673687, lng: 106.593145 },
                      8,
                      1, {
                        title: "CHONGQING HI-LEX CABLE SYSTEM GROUP CO., LTD.重慶HI-LEX (CHINA)",
                        address2: "",
                        address: "No.6, Yunrui Street, New North Zone, Chongqing, 401120, China",
                        tel: "86(23)67410898",
                        fax: "86(23)67504813",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/CHONGQING HI-LEX CABLE SYSTEM GROUP CO., LTD..webp"
                      }, true)}>CHONGQING HI-LEX CABLE SYSTEM GROUP CO., LTD.重慶HI-LEX (CHINA)</li>
                    <li onClick={() => handleMove(
                      { lat: 29.57313584910001, lng: 106.54885497656208 },
                      8,
                      1, {
                        title: "Chongqing Hi-Lex Control Cable System Co., Ltd.",
                        address2: "",
                        address: "No.C29 Economy Development Yard Yubei District Chongqing, 400020 China",
                        tel: "86(23)67463128",
                        fax: "86(23)67463288",
                        established: "Sep., 2002",
                        netSales: "34 million US $",
                        employee: "219",
                        image: "/images/sub/company/affiliate/CHONGQING HI-LEX CONTROL CABLE SYSTEM CO., LTD..webp"
                      }, true)}>Chongqing Hi-Lex Control Cable System Co., Ltd.</li>
                  </ul>
                </li>
                <li>
                  <p>India</p>
                  <ul>
                    <li onClick={() => handleMove(
                      {lat: 22.972392, lng: 72.264609},
                      5,
                      5, {
                        title: "Hi-Lex India (P) Ltd. Gujarat Unit-IV.",
                        address2: "",
                        address: "Plot No. AV-33, Bol Gidc Industrial Estate, Sanand-II, Ahmedabad, Gujarat, India 382170",
                        tel: "91(79)7961901200",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX INDIA(P)LTD. (INDIA) GUJARAT.webp"
                      }, true)}>Hi-Lex India (P) Ltd. Gujarat Unit-IV.</li>
                    <li onClick={() => handleMove(
                      {lat: 28.379173, lng: 76.895214},
                      11,
                      5, {
                        title: "Hi-Lex India (P) Ltd. Manesar Head Office Unit-II.",
                        address2: "",
                        address: "Plot No.398 Sector-8, Imt Manesar, Gurgaon-122050, Haryana, India",
                        tel: "91(124)4565000",
                        fax: "91(124)4565004",
                        established: "Nov., 1998",
                        netSales: "39 million US $",
                        employee: "456",
                        image: "/images/sub/company/affiliate/HI-LEX INDIA（P）LTD. (INDIA) (MANESAR HEAD OFFICE).webp"
                      }, true)}>Hi-Lex India (P) Ltd. Manesar Head Office Unit-II.</li>
                    <li onClick={() => handleMove(
                      {lat: 28.364881, lng: 76.91913862},
                      11,
                      5, {
                        title: "Hi-Lex India (P) Ltd. Manesar Unit-I.",
                        address2: "",
                        address: "Plot No.55 Sector-3, Imt Manesar, Gurgaon-122050, Haryana, India",
                        tel: "91(124)4565000",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                      }, true)}>Hi-Lex India (P) Ltd. Manesar Unit-I.</li>
                    <li onClick={() => handleMove(
                      {lat: 12.959420, lng: 79.979062},
                      11,
                      5, {
                        title: "Hi-Lex India (P) Ltd. Chennai Unit-III.",
                        address2: "",
                        address: "Plot No. B-1, SIPCOT Industrial Park, Pillaipakkam, R&N Suppliers Park, Phase-Ⅱ, Vengadu, Sriperumbudur Kanchipuram District, Tamil Nadu, India-602105",
                        tel: "91(44)67180000",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/HI-LEX INDIA(P)LTD. (INDIA) CHENNAI.webp"
                      }, true)}>Hi-Lex India (P) Ltd. Chennai Unit-III.</li>
                    <li onClick={() => handleMove(
                      {lat: 12.910675513662706, lng: 79.91931206042831},
                      11,
                      5, {
                        title: "Hi-Lex Door India.",
                        address2: "",
                        address: " - B400 Block ‘B’, Panrutti Village, Oragadam – Wallajabad Road, Sriperumbudur Taluk, Kanchipuram District, Kanchipuram, Tamil Nadu 631604 India",
                        tel: "",
                        fax: "",
                        established: "",
                        netSales: "",
                        employee: "",
                        image: "/images/sub/company/affiliate/daeddong-door-india-factory.png"
                      }, true)}>Hi-Lex Door India.</li>
                  </ul>
                </li>
                <li>
                  <p>Vietnam</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 20.897380, lng: 106.592423 },
                      6,
                      8, {
                        title: "Hi-Lex Vietnam Co., Ltd.",
                        address2: "",
                        address: "Management Bldg, Nomura, Haiphong Iz Km 13, Anduong, Haiphong City, Vietnam",
                        tel: "84(31)-3743058",
                        fax: "84(31)-3743059",
                        established: "Mar., 1999",
                        netSales: "20 million US $",
                        employee: "405",
                        image: "/images/sub/company/affiliate/HI-LEX VIETNAM CO., LTD. (VIETNAM).webp"
                      }, true)}>Hi-Lex Vietnam Co., Ltd.</li>
                  </ul>
                </li>
                <li>
                  <p>Thailand</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: 13.443532, lng: 101.08316 },
                      7,
                      6, {
                        title: "Thai Steel Cable Public Company Limited",
                        address2: "",
                        address: "Amata Industrial Estate, 700/737 Moo 1, Tambol Panthong, Amphur Panthong, Chonburi 20160 Thailand",
                        tel: "66(2)738-9460/76",
                        fax: "66(2)738-9482",
                        established: "Nov., 1981",
                        netSales: "85 million US $",
                        employee: "1,140",
                        image: "/images/sub/company/affiliate/THAI STEEL CABLE PUBLIC COMPANY LIMITED.webp"
                      }, true)}>Thai Steel Cable Public Company Limited</li>
                  </ul>
                </li>
                <li>
                  <p>Indonesia</p>
                  <ul>
                    <li onClick={() => handleMove(
                      { lat: -6.162498, lng: 106.647924 },
                      8,
                      7, {
                        title: "PT.Hi-Lex Parts Indonesia",
                        address2: "",
                        address: "Rjpx+W5r, Jl. Pembangunan 2, Rt.001/Rw.002, Karang Anyar, Kec. Neglasari, Kota Tangerang, Banten 15121 Indonesia",
                        tel: "62(21)-552-2325",
                        fax: "62(21)-399-8307",
                        established: "Dec., 1988",
                        netSales: "12 million US $",
                        employee: "433",
                        image: "/images/sub/company/affiliate/PT.HI-LEX PARTS INDONESIA.webp"
                      }, true)}>PT.Hi-Lex Parts Indonesia</li>
                    <li onClick={() => handleMove(
                      { lat: -6.33070, lng: 107.1490 },
                      8,
                      7, {
                        title: "PT.Hi-Lex Indonesia",
                        address2: "",
                        address: "Jl., Bouraq No.35 Ds.Karanganyar Kec.Neglasari Tangerang, Indonesia",
                        tel: "62(21)-552-2325",
                        fax: "62(21)-552-2324",
                        established: "Nov., 1978",
                        netSales: "85 million US $",
                        employee: "1,219",
                        image: "/images/sub/company/affiliate/THAI STEEL CABLE PUBLIC COMPANY LIMITED.webp"
                      }, true)}>PT.Hi-Lex Indonesia</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </GoogleMap>

      <MapInfo isOpen={mapModalOpen} onRequestClose={closeModal} mapInfo={mapInfo}/>
    </>
  );
};

const redSquareIcon = {
  path: "M -1,-1 L 1,-1 L 1,1 L -1,1 Z",
  fillColor: "red",
  borderColor: 'black',
  fillOpacity: 1,
  strokeColor: "yellow",
  strokeWeight: 2,
  scale: 10,
};

const myStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{color: "black"}]
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{visibility: "off"}]
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{visibility: "off"}]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{color: "#7089a1"}]
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{color: "#ffffff"}]
  },
];
