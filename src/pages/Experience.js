import { School, Work } from "@mui/icons-material";
import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="June 2022 - September 2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<School/>}>
          <h3 className="vertical-timeline-element-title">University of Washington, Seattle, WA</h3>
          <p>Fullstack Web Development Bootcamp</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="February 2021 - June 2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<Work/>}>
          <h3 className="vertical-timeline-element-title">Hamlin Robinson School, Seattle, WA</h3>
          <p>Resident Middle School Teacher</p>
        </VerticalTimelineElement>

<VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date="September 2021 - June 2022"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<School/>}>
          <h3 className="vertical-timeline-element-title">University of Washington, Seattle, WA</h3>
          <p>U-ACT Teacher Certification Program</p>
        </VerticalTimelineElement>

<VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="August 2017 - April 2020"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<Work/>}>
           <h3 className="vertical-timeline-element-title">Smart Kids International English, Ningbo, CN</h3>
          <p>English Teacher</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work" 
        date="June 2016 - August 2017"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<Work/>}>
           <h3 className="vertical-timeline-element-title">K and L Gates, Seattle, WA</h3>
          <p>E-DAT Technician</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education" 
        date=" 2009 - June 2012"
        iconStyle={{background: "#3e497a", color: "#fff"}}
        icon={<School/>}>
          <h3 className="vertical-timeline-element-title">Western Washington University, Bellingham, WA</h3>
          <p>BA Psychology</p>
        </VerticalTimelineElement>
        
      </VerticalTimeline>
      </div>
  );
}

export default Experience;