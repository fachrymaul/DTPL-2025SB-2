<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <title>Invoice {{ $order->order_number }}</title>
    <style>
        @page { margin: 24mm 18mm; }
        * { box-sizing: border-box; }
        body { font-family: DejaVu Sans, sans-serif; font-size: 11pt; color: #111; margin: 0; }
        .header { display: table; width: 100%; border-bottom: 2px solid #333; padding-bottom: 12pt; margin-bottom: 18pt; }
        .header .brand { display: table-cell; vertical-align: top; }
        .header .meta { display: table-cell; vertical-align: top; text-align: right; }
        .brand h1 { margin: 0; font-size: 18pt; }
        .brand p { margin: 2pt 0 0; color: #555; font-size: 9pt; }
        .meta h2 { margin: 0; font-size: 14pt; letter-spacing: 2pt; color: #333; }
        .meta p { margin: 2pt 0 0; font-size: 9pt; color: #555; }
        .section { margin-bottom: 16pt; }
        .section h3 { margin: 0 0 6pt; font-size: 10pt; text-transform: uppercase; letter-spacing: 1pt; color: #666; }
        .info-grid { display: table; width: 100%; }
        .info-grid .col { display: table-cell; width: 50%; vertical-align: top; }
        .info-grid p { margin: 0 0 3pt; font-size: 10pt; }
        table.items { width: 100%; border-collapse: collapse; }
        table.items th, table.items td { padding: 8pt 6pt; text-align: left; font-size: 10pt; }
        table.items thead { background: #f3f4f6; }
        table.items th { border-bottom: 1pt solid #333; }
        table.items tbody tr { border-bottom: 1pt solid #e5e7eb; }
        table.items .num { text-align: right; }
        .totals { width: 45%; margin-left: auto; margin-top: 10pt; }
        .totals td { padding: 5pt 6pt; font-size: 10pt; }
        .totals .label { text-align: right; color: #555; }
        .totals .value { text-align: right; }
        .totals tr.grand td { border-top: 2pt solid #333; font-weight: bold; font-size: 12pt; padding-top: 8pt; }
        .status-badge { display: inline-block; padding: 3pt 8pt; border-radius: 4pt; font-size: 9pt; font-weight: bold; text-transform: uppercase; }
        .status-pending { background: #fef3c7; color: #92400e; }
        .status-completed, .status-verified { background: #d1fae5; color: #065f46; }
        .status-cancelled, .status-rejected { background: #fee2e2; color: #991b1b; }
        .footer { margin-top: 28pt; padding-top: 10pt; border-top: 1pt solid #ddd; font-size: 9pt; color: #666; text-align: center; }
    </style>
</head>
<body>
    <div class="header">
        <div class="brand">
            <h1>Desa Manud Jaya</h1>
            <p>Destinasi Wisata &amp; Atraksi Budaya</p>
        </div>
        <div class="meta">
            <h2>INVOICE</h2>
            <p>No. {{ $order->order_number }}</p>
            <p>{{ $order->created_at->format('d F Y, H:i') }}</p>
        </div>
    </div>

    <div class="section info-grid">
        <div class="col">
            <h3>Ditagihkan Kepada</h3>
            <p><strong>{{ $order->user->name }}</strong></p>
            <p>{{ $order->user->email }}</p>
        </div>
        <div class="col" style="text-align: right;">
            <h3>Status Pesanan</h3>
            <p>
                <span class="status-badge status-{{ $order->status }}">
                    {{ $statusLabel($order->status) }}
                </span>
            </p>
            @if ($order->transaction)
                <p style="margin-top: 6pt;">
                    <span class="status-badge status-{{ $order->transaction->status }}">
                        Pembayaran: {{ $statusLabel($order->transaction->status) }}
                    </span>
                </p>
            @endif
        </div>
    </div>

    <div class="section">
        <h3>Rincian Tiket</h3>
        <table class="items">
            <thead>
                <tr>
                    <th style="width: 50%;">Tiket</th>
                    <th class="num" style="width: 15%;">Harga</th>
                    <th class="num" style="width: 10%;">Qty</th>
                    <th class="num" style="width: 25%;">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($order->items as $item)
                    <tr>
                        <td>
                            <strong>{{ $item->ticket->name }}</strong><br>
                            @if ($item->variant_name)
                                <span style="color: #333; font-size: 9pt;">{{ $item->variant_name }}</span><br>
                            @endif
                            <span style="color: #666; font-size: 9pt;">{{ ucfirst($item->ticket->category) }}</span>
                        </td>
                        <td class="num">{{ $formatRupiah($item->price) }}</td>
                        <td class="num">{{ $item->quantity }}</td>
                        <td class="num">{{ $formatRupiah($item->price * $item->quantity) }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <table class="totals">
            <tr class="grand">
                <td class="label">Total</td>
                <td class="value">{{ $formatRupiah($order->total) }}</td>
            </tr>
        </table>
    </div>

    @if ($order->transaction)
        <div class="section">
            <h3>Informasi Pembayaran</h3>
            <div class="info-grid">
                <div class="col">
                    <p><strong>Metode:</strong> Transfer Bank</p>
                    <p><strong>Bank Pengirim:</strong> {{ $order->transaction->bank_name }}</p>
                    <p><strong>Nama Rekening:</strong> {{ $order->transaction->account_name }}</p>
                    <p><strong>No. Rekening:</strong> {{ $order->transaction->account_number }}</p>
                </div>
                <div class="col">
                    @if ($order->transaction->paid_at)
                        <p><strong>Dibayar pada:</strong><br>{{ $order->transaction->paid_at->format('d F Y, H:i') }}</p>
                    @endif
                    @if ($order->transaction->notes)
                        <p style="margin-top: 6pt;"><strong>Catatan:</strong><br>{{ $order->transaction->notes }}</p>
                    @endif
                </div>
            </div>
        </div>
    @endif

    <div class="footer">
        <p>Terima kasih atas pesanan Anda. Tunjukkan nomor pesanan dan invoice ini di loket masuk destinasi wisata.</p>
        <p>Dokumen ini dicetak secara otomatis dan sah tanpa tanda tangan.</p>
    </div>
</body>
</html>
