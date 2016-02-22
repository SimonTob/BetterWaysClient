import React from 'react'

import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import FontIcon from 'material-ui/lib/font-icon';
import ActionFlightTakeoff from 'material-ui/lib/svg-icons/action/flight-takeoff';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import Paper from 'material-ui/lib/paper';

import CourseModuleInfo from '../components/CourseModuleInfo';
const {Grid, Row, Col} = require('react-flexgrid');

var pageContainerStyle = {
  margin:'32px 20px'
}

var courseContainerStyle = {
  background: 'white',
  marginTop: '32px'
};

var moduleNumStyle = {
  color: '#888888',
  marginTop: '0px',
  marginBottom: '10px'
}

var moduleNameStyle = {
  marginTop: '0px',
  marginBottom: '0px'

}

var paddingStyle = {
  padding: '32px'
}

var marginStyle = {
  margin: '32px'
}

var iconStyle = {
  color : 'black'
}

const CourseModule = React.createClass({

  render: function() {

    var styles = {
      default_tab:{
        color: 'black',
        backgroundColor: '#F0F0F0',
        fontWeight: 400,
      },
      active_tab:{
        color: 'blue',
      }
    }

    styles.tab = []
    styles.tab[0] = styles.default_tab;
    styles.tab[1] = styles.default_tab;
    styles.tab[2] = styles.default_tab;
    //styles.tab[this.state.slideIndex] = objectAssign({},   styles.tab[this.state.slideIndex], styles.active_tab);

    return (
      <div style={pageContainerStyle}>
        <Row>
          <Col xs={0} sm={0} md={2} lg={2}/>
          <Col xs={12} sm={12} md={8} lg={8}>
            <Paper style={courseContainerStyle}>
              <div style={paddingStyle}>
                <h4 style={moduleNumStyle}>Modul 1/12</h4>
                <h1 style={moduleNameStyle}>Fyret. Hvad nu?</h1>
              </div>
              <Tabs >
                <Tab style={styles.tab[0]}
                  icon={<FontIcon style={iconStyle} color={'DarkGray'} className="material-icons">wb_incandescent</FontIcon>}
                  label="VIDEN">
                  <div style={paddingStyle} >
                    <CourseModuleInfo />
                  </div>
                </Tab>
                <Tab style={styles.tab[1]}
                  icon={<FontIcon style={iconStyle} color={'DarkGray'} className="material-icons">colorize</FontIcon>}
                  label="EKSPERIMENT"
                />
                <Tab style={styles.tab[2]}
                  icon={<FontIcon style={iconStyle} color={'DarkGray'} className="material-icons">cloud</FontIcon>}
                  label="REFLEKTION"
                />
              </Tabs>
            </Paper>

          </Col>
          <Col xs={0} sm={0} md={2} lg={2}/>
        </Row>
      </div>
    )
  }
});

export default CourseModule


  /*<Card>
    <CardHeader
      title="Modul 1/12"
      subtitle="Fyret. Hvad nu?"
      actAsExpander={false}
      showExpandableButton={false}
    />
    <CardText expandable={false}>
      <Tabs>
        <Tab
          icon={<FontIcon className="material-icons">wb_incandescent</FontIcon>}
          label="VIDEN">
          <div>
            <CourseModuleInfo />
          </div>
        </Tab>
        <Tab
          icon={<FontIcon className="material-icons">colorize</FontIcon>}
          label="EKSPERIMENT"
        />
        <Tab
          icon={<FontIcon className="material-icons">cloud</FontIcon>}
          label="REFLEKTION"
        />
      </Tabs>
    </CardText>
    <CardActions expandable={true}>
      <FlatButton label="Forrige"/>
      <FlatButton label="Næste"/>
    </CardActions>
  </Card>*/