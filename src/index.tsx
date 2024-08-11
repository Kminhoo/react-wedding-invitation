import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App'
import StateMessage from '@components/common/StateMessage'

import './index.scss'

const ErrorFallback = ({ error }: { error: any }) => {
  return <StateMessage type="error" error={error.message} />
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ErrorBoundary fallbackRender={ErrorFallback}>
    <App />
  </ErrorBoundary>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
