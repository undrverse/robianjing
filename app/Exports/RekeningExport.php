<?php

namespace App\Exports;

use App\Models\Rekening;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithColumnWidths; // Tambahkan ini
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class RekeningExport implements FromCollection, WithHeadings, WithStyles, WithColumnWidths // Tambahkan WithColumnWidths
{
    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {

        return Rekening::select('bank', 'status', 'nama', 'web', 'supplier', 'no_rek', 'nama_ibu', 'no_hp', 'email', 'password', 'no_hp', 'user_ib', 'pin_ib', 'kode_mb', 'password_transaksi', 'pin_mb', 'pin_atm', 'skn', 'pin_skn', 'jenis_atm', 'no_kartu_atm', 'cvv', 'masa_berlaku_atm', 'keterangan', 'user_my_bca', 'password_my_bca', 'pin_transaksi', 'tanggal_terima', 'coorporate_id', 'coorporate', 'id_coop')->get();
    }

    public function headings(): array
    {
        return [
            'Bank',
            'Status',
            'Nama',
            'Web',
            'Supplier',
            'No Rek',
            'Nama Ibu',
            'No HP',
            'Email',
            'Password',
            'User IB',
            'Pin IB',
            'Kode MB',
            'Password Transaksi',
            'Pin MB',
            'Pin ATM',
            'SKN',
            'Pin SKN',
            'Jenis ATM',
            'No Kartu ATM',
            'CVV',
            'Masa Berlaku ATM',
            'Keterangan',
            'User My BCA',
            'Password My BCA',
            'Pin Transaksi',
            'Tanggal Terima',
            'Coorporate ID',
            'Coorporate',
            'ID Coop',
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 20,
            'B' => 20,
            'C' => 20,
            'D' => 20,
            'E' => 20,
            'F' => 20,
            'G' => 20,
            'H' => 20,
            'I' => 20,
            'J' => 20,
            'K' => 20,
            'L' => 20,
            'M' => 20,
            'N' => 20,
            'O' => 20,
            'P' => 20,
            'Q' => 20,
            'R' => 20,
            'S' => 20,
            'T' => 20,
            'U' => 20,
            'V' => 20,
            'W' => 20,
            'X' => 20,
            'Y' => 20,
            'Z' => 20,
            'AA' => 20,
            'AB' => 20,
            'AC' => 20,
            'AD' => 20,
            'AE' => 20,
            'AF' => 20,
            'AG' => 20,
        ];
    }

    public function styles(Worksheet $sheet)
    {
        $sheet->getStyle('A1:AD1')->applyFromArray([
            'font' => [
                'bold' => true,
            ],
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ],
            ],
        ]);

        $sheet->getStyle('A1:AD' . $sheet->getHighestRow())->applyFromArray([
            'borders' => [
                'allBorders' => [
                    'borderStyle' => \PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN,
                ],
            ],
        ]);

        return [
            // Style the first row as bold text.
            1    => ['font' => ['bold' => true]],
        ];
    }
}
