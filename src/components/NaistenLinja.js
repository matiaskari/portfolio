import React from 'react'

const Projects = () => {
    const style = {
        content: {

        },
        item: {
            width: '33%'
        },
        title: {
            padding: '0 10px 5px 10px'
        }
    }
    return (
        <div>
            <h1 style={style.title}>Societal Design Project: Naisten Linja</h1>
            <div style={style.content}>
                <h3>The task</h3>
                <p>
                    This project was a Digital Service Design project created in a team of 4 as a university course work. The university course is called Societal Design Project
                    and the entire course consists of one large project, made for a real organization. My team's client organization was Naisten Linja, a non-profit
                    organization that helps and supports women who have experienced violence or who worry that they might experience it in the future.
                </p>
                <p>
                    Naisten Linja wanted us to specifically work on their digital services side and to focus on women who face harassment on the internet.
                </p>
                <h3>My role</h3>
                <p>
                    My role in the project was - in addition to doing the standard work that everybody in the group did - organizing and leading the group; making sure that
                    everyone knew what they needed to do and when. I kept each member of the group informed of their separate individual tasks, like for example whose turn
                    it was to make the weekly progress report video.
                </p>
                <h3>The process</h3>
                <p>
                    We conducted a survey to gain a good overall understanding of the target group and based on that we specified the target group and focused on 3 subgroups:
                    women who are everyday social media users, women who play video games and women who are very visible on social media due to their job in politics or
                    entertainment.
                </p>
                <p>
                    After a round of interviews based on these groups, we realized that they all face quite similar problems online and this selection of subgroups was
                    not very effective. In the end, we decided to focus on the third subgroup, the influencers, because we felt that they had the most potential to reach
                    and impact a large amount of people.
                </p>
                <p>
                    The most important findings of the survey were that about 80% of the women who replied had experienced some sort of harassment online, but
                    only 2% of them could name even one support service.
                </p>
                <h3>The solution</h3>
                <p>
                    The solution was to restructure their website to be more user friendly and to create an awareness campaign, because during the design process it became
                    apparent that the two biggest problems were people's overall lack of awareness of their services and the difficulty of use once they did reach the website.
                </p>
            </div>
        </div>
    )
}

export default Projects
