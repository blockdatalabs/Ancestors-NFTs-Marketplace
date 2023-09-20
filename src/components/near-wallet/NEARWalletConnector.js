import { useWallet } from  '@mintbase-js/react'

const  NEARWalletConnector = () => {
  const {
    connect,
    disconnect,
    activeAccountId,
    selector,
    isConnected,
    errorMessage,
  } = useWallet();


  if (!isConnected) {
    return (
        <section className="banner">
            <div className="container big">
                <button className="btn btn-primary" style={{width: 500, padding: 25, marginRight: 20, borderRadius: 20}}  onClick={connect}>Connect To NEAR</button>
                </div>
        </section>
    )
  }

  return (
    <section className="banner">
        <div className="container big">
          <h5>You are connected as {activeAccountId}</h5>
          <button className="btn btn-primary" style={{width: 500, padding: 25, marginRight: 20, borderRadius: 20}} onClick={disconnect}>Disconnect</button>
        </div>
    </section>
  )
}

export default NEARWalletConnector;