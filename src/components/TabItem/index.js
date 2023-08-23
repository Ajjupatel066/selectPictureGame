import './index.css'

const TabItem = props => {
  const {tabDetails, activeTabId, onChangeTab} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = activeTabId ? 'color' : ''

  const onTabChange = () => {
    onChangeTab(tabId)
  }

  return (
    <li className="tab-item">
      <button
        className={`tab-button ${activeTabClassName}`}
        type="button"
        onClick={onTabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
