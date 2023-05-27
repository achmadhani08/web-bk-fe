import axios from "axios";
import { toast } from 'react-toastify';
import { urlAPI } from "../../../../data/fixData";

export const getSiswas = async (setDataSiswa, request, setLoading) => {
  let kelas = request?.kelas;
  let jurusan = request?.jurusan;
  setLoading(true)
  const response = await axios.get(`${urlAPI.siswa}/${kelas}-${jurusan}`)

  setDataSiswa(response.data.data)
  setLoading(false)
}

export const addSiswa = async (request) => {
  const response = await axios.post(`${urlAPI.siswa}/tambah-siswa`, request)

  if (response?.data?.status === 'success') {
    toast.success('Berhasil menambah data siswa');
  } else toast.error('Gagal menambah data siswa');

  return response
}

export const updateSiswa = async (id, request) => {
  const response = await axios.put(
    `${urlAPI.siswa}/${id}/edit-siswa`,
    {
      nis: request.nis,
      nama: request.nama,
      jk: request.jk
    });

  if (response?.data?.status === 'success') {
    toast.info('Berhasil mengubah data siswa');
  } else toast.error('Gagal mengubah data siswa');

  return response
}

export const deleteSiswa = async (id) => {
  const response = await axios.delete(`${urlAPI.siswa}/${id}/hapus-siswa`)

  if (response?.data?.status === 'success') {
    toast.success('Berhasil menghapus data siswa');
  } else toast.error('Gagal menghapus data siswa');

  return response
}

export const deleteSelectedSiswa = async (selected) => {
  const response = await axios.post(`${urlAPI.siswa}/hapus-siswa`, {
    destroy: selected
  })

  if (response?.data?.status === 'success') {
    toast.success('Berhasil menghapus data siswa yang terpilih');
  } else toast.error('Gagal menghapus data siswa yang terpilih');

  return response
}