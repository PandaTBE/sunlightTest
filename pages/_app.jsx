

function MyApp({ Component, pageProps }) {
  return (
    <>
    	<Component {...pageProps} />
		<style jsx global>{`
		body {
			font-family: 'Roboto', sans-serif;
			margin: 0;
		}
		* {
			box-sizing: border-box;
		}
		`}
		</style>
	</>
  )
}

export default MyApp;
