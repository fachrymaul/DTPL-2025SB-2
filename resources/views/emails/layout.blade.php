<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>{{ $headline }}</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#1c1917;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f4;padding:32px 16px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.06);">
                    <tr>
                        <td style="padding:24px 28px;border-bottom:1px solid #e7e5e4;">
                            <h1 style="margin:0;font-size:18px;font-weight:700;color:#0c7d4d;letter-spacing:-0.01em;">Desa Manud Jaya</h1>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:32px 28px 8px;">
                            <p style="margin:0 0 8px;font-size:14px;color:#0c7d4d;font-weight:600;letter-spacing:0.02em;text-transform:uppercase;">{{ $hook }}</p>
                            <h2 style="margin:0;font-size:24px;font-weight:700;line-height:1.25;">{{ $headline }}</h2>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:16px 28px 8px;">
                            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#44403c;">Halo {{ $user->name }},</p>
                            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#44403c;">{{ $intro }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:0 28px 16px;">
                            <div style="padding:16px 20px;border-left:3px solid #0c7d4d;background:#f0fdf4;border-radius:0 8px 8px 0;">
                                <p style="margin:0 0 6px;font-size:13px;font-weight:600;color:#0c7d4d;text-transform:uppercase;letter-spacing:0.03em;">Untuk kamu</p>
                                <p style="margin:0;font-size:15px;line-height:1.5;color:#1c1917;">{{ $highlight }}</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:0 28px 24px;">
                            <p style="margin:0;font-size:16px;line-height:1.6;color:#44403c;">{{ $pitch }}</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="center" style="padding:0 28px 32px;">
                            <a href="{{ url($targetPath) }}" style="display:inline-block;padding:14px 28px;background:#0c7d4d;color:#ffffff;text-decoration:none;border-radius:8px;font-size:15px;font-weight:600;">{{ $cta }}</a>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:24px 28px;border-top:1px solid #e7e5e4;background:#fafaf9;">
                            <p style="margin:0 0 6px;font-size:12px;color:#78716c;">Anda menerima email ini karena terdaftar di Desa Manud Jaya.</p>
                            <p style="margin:0;font-size:12px;color:#78716c;">&copy; {{ date('Y') }} Desa Manud Jaya.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
