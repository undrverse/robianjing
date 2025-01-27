<?php

namespace App\Http\Controllers;

use App\Models\Rekening;
use Illuminate\Http\Request;
use App\Exports\RekeningExport;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Storage;

class RekeningController extends Controller
{
  // Global Variabel
  protected $attributes = [
    'DataRekening' => [
      ['data' => 'bank', 'type' => 'select', 'options' => ['BCA', 'Mandiri', 'BNI', 'BRI', 'CIMB', 'JAGO', 'Jenius'], 'header' => 'Bank'],
      ['data' => 'status', 'type' => 'select', 'options' => ['Active', 'Stock', 'Sakit', 'Closed'], 'header' => 'Status'],
      ['data' => 'nama', 'type' => 'text', 'header' => 'Nama'],
      ['data' => 'web', 'type' => 'text', 'header' => 'Web'],
      ['data' => 'supplier', 'type' => 'text', 'header' => 'Supplier'],
      ['data' => 'no_rek', 'type' => 'text', 'header' => 'No. Rekening'],
      ['data' => 'email', 'type' => 'text', 'header' => 'Email'],
      ['data' => 'password', 'type' => 'text', 'header' => 'Password'],
      ['data' => 'nama_ibu', 'type' => 'text', 'header' => 'Nama Ibu'],
      ['data' => 'no_hp', 'type' => 'number', 'header' => 'No. Hp'],
      ['data' => 'user_ib', 'type' => 'text', 'header' => 'User Internet Banking'],
      ['data' => 'pin_ib', 'type' => 'text', 'header' => 'Pin Internet Banking'],
      ['data' => 'kode_mb', 'type' => 'text', 'header' => 'Kode Akses Mobile Banking'],
      ['data' => 'password_transaksi', 'type' => 'text', 'header' => 'Password Transaksi'],
      ['data' => 'pin_mb', 'type' => 'text', 'header' => 'Pin Mobile Banking'],
      ['data' => 'pin_atm', 'type' => 'text', 'header' => 'Pin ATM'],
      ['data' => 'skn', 'type' => 'text', 'header' => 'Serial Key Number'],
      ['data' => 'pin_skn', 'type' => 'text', 'header' => 'Pin Serial Key Number'],
      ['data' => 'jenis_atm', 'type' => 'text', 'header' => 'Jenis ATM'],
      ['data' => 'no_kartu_atm', 'type' => 'text', 'header' => 'No. Kartu Atm'],
      ['data' => 'cvv', 'type' => 'text', 'header' => 'CVV'],
      ['data' => 'masa_berlaku_atm', 'type' => 'date', 'header' => 'Masa Berlaku ATM'],
      ['data' => 'keterangan', 'type' => 'text', 'header' => 'Keterangan'],
      ['data' => 'tanggal_terima', 'type' => 'date', 'header' => 'Tanggal Terima'],
    ],
    'MyBCA' => [
      ['data' => 'user_my_bca', 'type' => 'text', 'header' => 'User My BCA'],
      ['data' => 'password_my_bca', 'type' => 'text', 'header' => 'Password My BCA'],
      ['data' => 'pin_transaksi', 'type' => 'text', 'header' => 'Pin Transaksi'],
    ],
    'Bisnis' => [
      ['data' => 'coorporate_id', 'type' => 'text', 'header' => 'Coorporate ID'],
      ['data' => 'coorporate', 'type' => 'text', 'header' => 'Coorporate'],
      ['data' => 'id_coop', 'type' => 'text', 'header' => 'ID'],
    ],
    'Foto' => [
      ['data' => 'ktp', 'type' => 'file', 'header' => 'Foto KTP', 'path' => 'foto_ktp'],
      ['data' => 'kartu_atm', 'type' => 'file', 'header' => 'Foto Kartu ATM', 'path' => 'foto_kartu_atm'],
      ['data' => 'token', 'type' => 'file', 'header' => 'Foto Token', 'path' => 'foto_token'],
      ['data' => 'buku_tabungan', 'type' => 'file', 'header' => 'Foto Buku Tabungan', 'path' => 'foto_buku-tabungan'],
    ],
  ];

  public function index()
  {
    $rekenings = Rekening::latest()->paginate(50);

    return inertia('DataRekening', [
      'rekenings' => $rekenings,
      'attributes' => $this->attributes,
    ]);
  }

  public function create()
  {
    return inertia('TambahDataUser', [
      'attributes' => $this->attributes
    ]);
  }

  public function store(Request $request)
  {
    $data = $request->validate([
      'nama' => 'nullable|string|max:255',
      'web' => 'nullable|string|max:255',
      'bank' => 'nullable|string|in:BCA,Mandiri,BNI,BRI,CIMB,JAGO,Jenius',
      'status' => 'nullable|string|in:Active,Stock,Sakit,Closed',
      'supplier' => 'nullable|string|max:255',
      'cabang' => 'nullable|string|max:255',
      'no_rek' => 'nullable|string|max:255',
      'nama_ibu' => 'nullable|string|max:255',
      'no_hp' => 'nullable|string|max:255',
      'email' => 'nullable|string|max:255',
      'password' => 'nullable|string|max:255',
      'user_ib' => 'nullable|string|max:255',
      'pin_ib' => 'nullable|string|max:255',
      'kode_mb' => 'nullable|string|max:255',
      'password_transaksi' => 'nullable|string|max:255',
      'pin_mb' => 'nullable|string|max:255',
      'pin_atm' => 'nullable|string|max:255',
      'skn' => 'nullable|string|max:255',
      'pin_skn' => 'nullable|string|max:255',
      'jenis_atm' => 'nullable|string|max:255',
      'no_kartu_atm' => 'nullable|string|max:255',
      'cvv' => 'nullable|string|max:255',
      'user_my_bca' => 'nullable|string|max:255',
      'password_my_bca' => 'nullable|string|max:255',
      'pin_transaksi' => 'nullable|string|max:255',
      'keterangan' => 'nullable|string|max:255',
      'tanggal_terima' => 'nullable|date',
      'coorporate_id' => 'nullable|string|max:255',
      'coorporate' => 'nullable|string|max:255',
      'id_coop' => 'nullable|string|max:255',
      'masa_berlaku_atm' => 'nullable|date',
      'ktp' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'kartu_atm' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'token' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'buku_tabungan' => 'nullable|image|mimes:jpeg,jpg,png|max:2048'
    ]);

    $ktp = $data['ktp'] ?? null;
    $kartu_atm = $data['kartu_atm'] ?? null;
    $token = $data['token'] ?? null;
    $buku_tabungan = $data['buku_tabungan'] ?? null;

    if ($ktp) {
      $data['foto_ktp'] = $ktp->storeAs("rekening", $ktp->hashName(), 'public');
    }

    if ($kartu_atm) {
      $data['foto_kartu_atm'] = $kartu_atm->storeAs("rekening", $kartu_atm->hashName(), 'public');
    }

    if ($token) {
      $data['foto_token'] = $token->storeAs("rekening", $token->hashName(), 'public');
    }

    if ($buku_tabungan) {
      $data['foto_buku_tabungan'] = $buku_tabungan->storeAs("rekening", $buku_tabungan->hashName(), 'public');
    }

    Rekening::create($data);

    return redirect()->route('rekening.index')->with('info', 'Data berhasil disimpan!');
  }

  public function show(Rekening $rekening)
  {
    return inertia('DetailUser', [
      'details' => $rekening,
      'attributes' => $this->attributes,
    ]);
  }

  public function edit(Rekening $rekening)
  {
    return inertia('EditUser', [
      'details' => $rekening,
      'attributes' => $this->attributes,
    ]);
  }

  public function update(Request $request, Rekening $rekening)
  {
    $data = $request->validate([
      'nama' => 'nullable|string|max:255',
      'web' => 'nullable|string|max:255',
      'bank' => 'nullable|string|in:BCA,Mandiri,BNI,BRI,CIMB,JAGO,Jenius',
      'status' => 'nullable|string|in:Active,Stock,Sakit,Closed',
      'supplier' => 'nullable|string|max:255',
      'cabang' => 'nullable|string|max:255',
      'no_rek' => 'nullable|string|max:255',
      'nama_ibu' => 'nullable|string|max:255',
      'no_hp' => 'nullable|string|max:255',
      'email' => 'nullable|string|max:255',
      'password' => 'nullable|string|max:255',
      'user_ib' => 'nullable|string|max:255',
      'pin_ib' => 'nullable|string|max:255',
      'kode_mb' => 'nullable|string|max:255',
      'password_transaksi' => 'nullable|string|max:255',
      'pin_mb' => 'nullable|string|max:255',
      'pin_atm' => 'nullable|string|max:255',
      'skn' => 'nullable|string|max:255',
      'pin_skn' => 'nullable|string|max:255',
      'jenis_atm' => 'nullable|string|max:255',
      'no_kartu_atm' => 'nullable|string|max:255',
      'cvv' => 'nullable|string|max:255',
      'user_my_bca' => 'nullable|string|max:255',
      'password_my_bca' => 'nullable|string|max:255',
      'pin_transaksi' => 'nullable|string|max:255',
      'keterangan' => 'nullable|string|max:255',
      'tanggal_terima' => 'nullable|date',
      'coorporate_id' => 'nullable|string|max:255',
      'coorporate' => 'nullable|string|max:255',
      'id_coop' => 'nullable|string|max:255',
      'masa_berlaku_atm' => 'nullable|date',
      'ktp' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'kartu_atm' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'token' => 'nullable|image|mimes:jpeg,jpg,png|max:2048',
      'buku_tabungan' => 'nullable|image|mimes:jpeg,jpg,png|max:2048'
    ]);

    $ktp = $data['ktp'] ?? null;
    $kartu_atm = $data['kartu_atm'] ?? null;
    $token = $data['token'] ?? null;
    $buku_tabungan = $data['buku_tabungan'] ?? null;

    if ($ktp) {
      if ($rekening->foto_ktp) {
        Storage::disk('public')->delete($rekening->foto_ktp);
      }
      $data['foto_ktp'] = $ktp->storeAs("rekening", $ktp->hashName(), 'public');
    }

    if ($kartu_atm) {
      if ($rekening->foto_kartu_atm) {
        Storage::disk('public')->delete($rekening->foto_kartu_atm);
      }
      $data['foto_kartu_atm'] = $kartu_atm->storeAs("rekening", $kartu_atm->hashName(), 'public');
    }

    if ($token) {
      if ($rekening->foto_token) {
        Storage::disk('public')->delete($rekening->foto_token);
      }
      $data['foto_token'] = $token->storeAs("rekening", $token->hashName(), 'public');
    }

    if ($buku_tabungan) {
      if ($rekening->foto_buku_tabungan) {
        Storage::disk('public')->delete($rekening->foto_buku_tabungan);
      }
      $data['foto_buku_tabungan'] = $buku_tabungan->storeAs("rekening", $buku_tabungan->hashName(), 'public');
    }

    $rekening->update($data);

    return redirect()->route('rekening.index')->with('info', 'Data berhasil diperbarui!');
  }

  public function destroy(Rekening $rekening)
  {
    $nama = $rekening->nama;

    $rekening->delete();

    if ($rekening->foto_ktp) {
      Storage::disk('public')->delete($rekening->foto_ktp);
    }

    if ($rekening->foto_kartu_atm) {
      Storage::disk('public')->delete($rekening->foto_kartu_atm);
    }

    if ($rekening->foto_token) {
      Storage::disk('public')->delete($rekening->foto_token);
    }

    if ($rekening->foto_buku_tabungan) {
      Storage::disk('public')->delete($rekening->foto_buku_tabungan);
    }

    return redirect()->route('rekening.index')->with('info', "Data \"$nama\" berhasil dihapus!");
  }

  public function export()
  {
    return Excel::download(new RekeningExport, 'rekening.xlsx');
  }

  public function batchDelete(Request $request)
  {
    $validated = $request->validate([
      'ids' => 'required|array|min:1',
      'ids.*' => 'exists:rekenings,id',
    ]);

    try {
      $rekenings = Rekening::whereIn('id', $validated['ids'])->get();

      foreach ($rekenings as $rekening) {
        if ($rekening->foto_ktp) {
          Storage::disk('public')->delete($rekening->foto_ktp);
        }

        if ($rekening->foto_kartu_atm) {
          Storage::disk('public')->delete($rekening->foto_kartu_atm);
        }

        if ($rekening->foto_token) {
          Storage::disk('public')->delete($rekening->foto_token);
        }

        if ($rekening->foto_buku_tabungan) {
          Storage::disk('public')->delete($rekening->foto_buku_tabungan);
        }
      }

      $deletedCount = Rekening::whereIn('id', $validated['ids'])->delete();

      return redirect()->route('rekening.index')->with('info', "$deletedCount data berhasil dihapus!");
    } catch (\Exception $e) {
      return redirect()->route('rekening.index')->with('error', "Terjadi kesalahan: " . $e->getMessage());
    }
  }
}
