import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Nav, Todos } from '../../components'

import * as TodoActions from '../../actions/TodoActions'

const Tour = ({todos, actions}) => (
  <div>
    <div
      style={{
        background: "#1abc9c",
        padding: '0 0.4rem 1rem',
        position:'absolute',
        width: '100%',
        top: 0,
        bottom: 0
      }}
      className="center-center"
    >
      <Todos todos={todos} {...actions}/>
    </div>
    <Nav/>
  </div>
)

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tour)