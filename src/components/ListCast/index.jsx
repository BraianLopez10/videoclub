import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Actor } from '../Actor'
import { H2, WrapperActor, Wrapper } from './style'
import { connect } from 'react-redux'

const ListCastPres = ({ type, id, modeDark }) => {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData () {
      try {
        let result
        if (type === 'movie') {
          result = await api.getCastMovie(id)
        } else {
          result = await api.getCastTv(id)
        }
        if (!result) return false
        if (result) setData(result.cast)
      } catch {

      }
    }
    getData()
  }, [id])

  if (data.length === 0) return null
  return (
    <Wrapper modeDark = {modeDark}>
      <H2 modeDark = {modeDark} >Personajes Principales</H2>
      <WrapperActor>
        {data.slice(0, 10).map((d, index) => (<Actor key={index} data={d} modeDark={modeDark} />))}
      </WrapperActor>
    </Wrapper>
  )
}
const mapStateToProps = (state) => {
  return {
    modeDark: state.ui.modeDark
  }
}
export const ListCast = connect(mapStateToProps, {})(ListCastPres)
