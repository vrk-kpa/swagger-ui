import React from "react"
import PropTypes from "prop-types"
import ImPropTypes from "react-immutable-proptypes"

export default class BasicAuth extends React.Component {
  static propTypes = {
    authorized: PropTypes.object,
    getComponent: PropTypes.func.isRequired,
    schema: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context)
    let { schema, name } = this.props

    let value = this.getValue()
    let username = value.username

    this.state = {
      name: name,
      schema: schema,
      value: !username ? {} : {
        username: username
      }
    }
  }

  getValue () {
    let { authorized, name } = this.props

    return authorized && authorized.getIn([name, "value"]) || {}
  }

  onChange =(e) => {
    let { onChange } = this.props
    let { value, name } = e.target

    let newValue = this.state.value
    newValue[name] = value

    this.setState({ value: newValue })

    onChange(this.state)
  }

  render() {
    let { schema, getComponent, name, errSelectors, translate } = this.props
    const Input = getComponent("Input")
    const Row = getComponent("Row")
    const Col = getComponent("Col")
    const AuthError = getComponent("authError")
    const JumpToPath = getComponent("JumpToPath", true)
    const Markdown = getComponent( "Markdown" )
    let username = this.getValue().username
    let errors = errSelectors.allErrors().filter( err => err.get("authId") === name)

    return (
      <div>
        <h4>{translate("auth.basic.title")}<JumpToPath path={[ "securityDefinitions", name ]} /></h4>
        { username && <h6>{translate("auth.authorized")}</h6> }
        <Row>
          <Markdown source={ schema.get("description") } />
        </Row>
        <Row>
          <label>{translate("auth.basic.username")}</label>
          {
            username ? <code> { username } </code>
                     : <Col><Input type="text" required="required" name="username" onChange={ this.onChange }/></Col>
          }
        </Row>
        <Row>
          <label>{translate("auth.basic.password")}</label>
            {
              username ? <code> {translate("auth.hidden")} </code>
                       : <Col><Input required="required"
                                     autoComplete="new-password"
                                     name="password"
                                     type="password"
                                     onChange={ this.onChange }/></Col>
            }
        </Row>
        {
          errors.valueSeq().map( (error, key) => {
            return <AuthError error={ error }
                              key={ key }/>
          } )
        }
      </div>
    )
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    errSelectors: PropTypes.object.isRequired,
    getComponent: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    schema: ImPropTypes.map,
    authorized: ImPropTypes.map
  }
}
