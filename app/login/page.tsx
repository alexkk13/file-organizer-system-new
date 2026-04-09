'use client'



export default function LoginPage() {
  const handleMicrosoftLogin = () => {
    // TODO: 后续添加 Microsoft OAuth 登录逻辑
    console.log('Microsoft login clicked')
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0b0d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: '#111318',
        border: '1px solid #1e2330',
        borderRadius: 16,
        padding: '40px 48px',
        width: '100%',
        maxWidth: 420,
        textAlign: 'center'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 28, fontWeight: 600, margin: 0, color: '#3b82f6' }}>
            📁 OneDrive Organizer
          </h1>
          <p style={{ fontSize: 13, color: '#64748b', marginTop: 8 }}>
            File Management System
          </p>
        </div>

        {/* 欢迎信息 */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 500, margin: 0, color: '#f1f5f9' }}>
            Welcome
          </h2>
          <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 8 }}>
            Sign in with your Microsoft account<br />
            to access your OneDrive files
          </p>
        </div>

        {/* 登录按钮 */}
        <button
          onClick={handleMicrosoftLogin}
          style={{
            width: '100%',
            padding: '14px 20px',
            background: '#2b5797',
            border: 'none',
            borderRadius: 8,
            color: '#fff',
            fontSize: 14,
            fontWeight: 500,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12
          }}
        >
          <svg width="20" height="20" viewBox="0 0 23 23" fill="none">
            <path d="M11 0H0V11H11V0Z" fill="#F25022"/>
            <path d="M23 0H12V11H23V0Z" fill="#7FBA00"/>
            <path d="M11 12H0V23H11V12Z" fill="#00A4EF"/>
            <path d="M23 12H12V23H23V12Z" fill="#FFB900"/>
          </svg>
          Sign in with Microsoft
        </button>

        {/* 权限说明 */}
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid #1e2330' }}>
          <p style={{ fontSize: 11, color: '#475569', margin: 0 }}>
            This app requires access to:<br />
            • Your profile information<br />
            • Read and write access to OneDrive files
          </p>
        </div>
      </div>
    </div>
  )
}