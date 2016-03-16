import React from 'react';
import { connect } from 'react-redux'
import SortAndEvaluateExercise from './exercises/SortAndEvaluateExercise'

import { fetchApiValue } from '../actions/api'

import Camera from './Camera'

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import Paper from 'material-ui/lib/paper';

import { shareVideo } from '../actions/shareVideo'



let CourseModuleExperiment = React.createClass({
  createMarkup() {
    return {
      __html:'<h1>&lt;Overskrift her&gt;</h1>  <p>&lt;Kort tekst her, efterfulgt af &gt;</p>  <sortableList/>' //'<h1>Hvad var godt ved dit gamle job?</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices commodo commodo. Suspendisse egestas, erat vel rutrum porta, sapien eros posuere nulla, id blandit metus odio a nibh.</p> <div data-oembed-url="https://vimeo.com/edwinhaverkamp/thezeppelin"> <div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 56.2493%;"><iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="//player.vimeo.com/video/99913972?byline=0&amp;badge=0&amp;portrait=0&amp;title=0" style="top: 0px; left: 0px; width: 100%; height: 100%; position: absolute;" webkitallowfullscreen="true"></iframe></div> </div> <h2>Ved at t&aelig;nke positivt kommer du vidre</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices commodo commodo. Suspendisse egestas, erat vel rutrum porta, sapien eros posuere nulla, id blandit metus odio a nibh. In tortor arcu, hendrerit et scelerisque vel, sagittis quis orci. Donec ullamcorper orci ut mollis congue. Fusce iaculis gravida purus a imperdiet. Sed venenatis, erat vitae porta lacinia, ligula neque porttitor neque, at mollis nisi est sit amet risus. Praesent ut pellentesque ex. Donec vulputate accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti.</p> <p><img alt="" src="http://betterideas.dk/wp-content/uploads/2015/03/outplacement.jpg" style="height:289px; width:400px" /></p> <p>Nullam facilisis, dolor congue molestie lobortis, ex ante semper justo, vitae placerat ante tellus non justo. Praesent blandit porta tellus.&nbsp;</p> <h2>Flere henvisninger</h2> <p><a href="http://wikipedia.org">Et eksternt link</a></p>'
    }
  },
  render : function() {
  return (
    <div>
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    </div>
  );}
});
CourseModuleExperiment = connect()(CourseModuleExperiment)

export default CourseModuleExperiment;


/*<h1>Opgave 1</h1>
<h3>Hvad var godt ved dit gamle job?</h3>
<p>Prøv at sortér begreberne herunder ift. hvad du bedst kunne lide ved dit gamle job</p>

<SortableList/>

<h1>Opgave 2</h1>
<h3>Hvordan præsenterer du dig selv?</h3>
<p>Film en præsentation af dig selv og del den med en ven</p>

<Camera onPublish={videoUuid => {
    console.log("onPublish invoked");
    console.log(videoUuid);

    dispatch(shareVideo(videoUuid));
}}>
</Camera>

<div style={{textAlign: 'center', marginTop: 50}}>
  <RaisedButton label="Færdig" primary={true} />
</div>*/
