import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'

const BackgroundPattern = ({ children }) => {
  return (
    <body className="h-screen bg-gradient-to-bl from-white to-purple-100 bg-cover bg-fixed bg-no-repeat bg-100-50 overflow-x-hidden">
      {children}
    </body>
  )
}

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <BackgroundPattern>
          <Main />
          <NextScript />
        </BackgroundPattern>
      </Html>
    )
  }
}

export default MyDocument
