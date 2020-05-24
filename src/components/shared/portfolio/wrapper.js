import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { switchMode } from '../../../store/actions'

const d = new Date()
const hour = d.getHours()

const Wrapper = (props) => {
  const mode = useSelector((state) => state.mode)
  const dispatch = useDispatch()

  const setHour = () => {
    hour >= 18 || (hour <= 4 && dispatch(switchMode(true)))
  }

  useEffect(() => {
    setHour()
  }, [])

  return (
    <div id='wrapper' className={`${mode.mode ? 'darkmode' : ''}`}>
      {props.children}
    </div>
  )
}

export default Wrapper
