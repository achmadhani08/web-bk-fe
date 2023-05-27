import axios from "axios";
import { urlAPI } from "../../../../data/fixData";

export const getPointKelas = async (request) => {
  let kelas = request.kelas;
  let jurusan = request.jurusan

  const response = await axios.get(`${urlAPI.point}/${kelas}-${jurusan}`)

  return response.json()
}