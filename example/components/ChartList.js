import React from "react"
import { Link } from "react-router-dom"

const configModules = import.meta.glob('../configurations/*.js')
const configurations = Object.keys(configModules).map(k => k.split('/').pop())

const ChartList = ({ props }) => {
  return (
    <div className="chart-list">
      {configurations.map(conf => {
        const confName = conf.replace(".js", "")
        return (
          <div key={confName}>
            <Link to={`/${confName}`}>{confName}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default ChartList