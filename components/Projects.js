var React = require('react');

function Project (props) {
  return (
    <div className={"project proj-row-"+props.index}>{props.children}</div>
  )
}

function ProjectName (props) {
  return (
    <div className="title">{props.projectName}</div>
  )
}

function ProjectLink (props) {
  return (
    <a href={props.url} target="_blank" className="project-link">{props.text}</a>
  )
}

function ProjectLogo (props) {
  return (
    <div className="logo"><img src={props.logoPath} /></div>
  )
}

function Responsive (props) {
  if ( props.res ) {
    return (
      <div>responsive</div>
    )
  } else { return false }
}

var Projects = React.createClass({
  render: function(){
    var projects = require("json!../assets/projects.json");
    var proj = projects.map(function(item, index){
      return <Project key={index} index={index + 1}>
                <ProjectLogo logoPath={item.logo} />
                <ProjectName projectName={item.project} />
                <ProjectLink url={item.url} text="View Project" />
                <Responsive res={item.responsive} />
              </Project>
    })
    return (
      <div className="projects">{proj}</div>
    )
  }
});

module.exports = Projects;
