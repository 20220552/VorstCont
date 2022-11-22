import React, { useEffect, useState } from 'react'
import { createClient } from "contentful"
import { Link, useParams } from "react-router-dom";
import { SPACE_ID, ACCESS_TOKEN } from "../../credentials";




const ProjectItem = () => {
    const [completedProject, setSingleProjectItem] = useState([])

    let { id } = useParams();

    const client = createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN })

    useEffect(() => {
        const getEntryById = async () => {
          try {
            await client.getEntry(id).then((entries) => {
              setSingleProjectItem(entries)
            })
          } catch (error) {
            console.log(`Error fetching authors ${error}`);
          }
        };
        getEntryById()
      }, [id])

      return (
        <div>

<div className="posts">
            <Link to="/PortfolioList" className="content-subhead">Blog Posts</Link>

            < section className="post">
              <header className="post-header">
                <img src={completedProject?.fields?.Image1?.fields?.file?.url} title="" width="578" height="291" />
                <h2 className="post-title pt-3">{completedProject?.fields?.title}</h2>
                
              </header>
              
            </section>

          </div>
          



        </div>
      )


//////
}
export default ProjectItem