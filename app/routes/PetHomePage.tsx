import { useState } from "react";

function PetHomePage () {
    const name = "วสวัตติ์ หาญสาริกิจ";
    const studentid = "026630491006-7 ";
    const email = "vasawat.har@rmutto.ac.th";
    const tel = "0642027999"; 
  
      return (
        <div className="bg-red-100 p-4">
        <h1 className="text-purple-800">ข้อมูลส่วนตัว</h1>
        <hr />
      
            <table  >
                <tbody>
                    <tr>
                        <td className="border border-purple-300 p-2">ชื่อ-สกุล :</td>
                        <td className="border border-purple-300 p-2">{name}</td>
                    </tr>
                    <tr>
                        <td className="border border-purple-300 p-2">รหัสนักศึกษา :</td>
                        <td className="border border-purple-300 p-2">{studentid}</td>
                    </tr>
                    <tr>
                        <td className="border border-purple-300 p-2">Email :</td>
                        <td className="border border-purple-300 p-2">{email}</td>
                    </tr>
                    <tr>
                        <td className="border border-purple-300 p-2">เบอร์โทรศัพท์</td>
                        <td className="border border-purple-300 p-2">{tel}</td>
                    </tr>
                </tbody>
            </table>
    </div>
      );
  }
  
  export default function MyContact () {
      return (
          <>  
                <th className="border border-purple-300 p-2 text-purple-600">PetHomePage</th>
              <hr />
              <PetHomePage />
          </>
      );
  
  }

  