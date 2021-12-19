import React from 'react'
import survey80 from './img/nl_project/80percent.png'
import survey2 from './img/nl_project/2percent.png'
import nl from './img/naistenlinjalogo.png'
import userbenefits from './img/nl_project/userbenefits.png'
import interview2 from './img/nl_project/interview2.png'

const Projects = () => {
    const style = {
        button: { //the buttons also inherit global styles for <a>, see App.css
            padding: '4px 14px 4px 14px',
            margin: '0 10px 0 0',
            backgroundColor: '#417ec4',
            borderRadius: '2px',
        },
        item: {
            width: '33%'
        },
        title: {
            padding: '0 10px 5px 10px'
        },
        pic: {
            maxHeight: '300px',
            marginRight: '10px'
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
                <p>Naisten Linja wanted us to specifically work on their digital services side and to focus on women who face harassment on the internet.</p>
                <img src={nl} style={style.pic} alt={'Naisten Linja'} />
                <h3>My role</h3>
                <p>
                    My role in the project was - in addition to doing the standard work that everybody in the group did - organizing and leading the group; making sure that
                    everyone knew what they needed to do and when. I kept each member of the group informed of their separate individual tasks, like for example whose turn
                    it was to make the weekly progress report video.
                </p>
                <h3>The process</h3>
                <p>
                    We conducted a survey to gain a good overall understanding of the target group.
                    The most important findings of the survey were that about 80% of the women who replied had experienced some sort of harassment online, but
                    only 2% of them could name even one support service. They also widely considered the support services to be necessary. Therefore, we concluded that
                    the biggest issue as to why women don't find and use Naisten Linja's services is the lack of awareness of the existence of these services.
                </p>
                <img src={survey80} style={style.pic} alt={'80% of women face harassment'} />
                <img src={survey2} style={style.pic} alt={'2% of women know about support services'} />
                <p>
                    Based on the survey, we specified the target group and focused on 3 subgroups:
                    women who are everyday social media users, women who play video games and women who are very visible on social media due to their job in politics or
                    entertainment.
                </p>
                <p>
                    After a round of interviews based on the three target groups, we realized that they all face quite similar problems online and this selection of subgroups was
                    not very effective. In the end, we decided to focus on the third subgroup, the influencers, because we felt that they had the most potential to reach
                    and impact a large amount of people.
                </p>
                <p>
                    Following that, we learned that Naisten Linja were already in the process of creating an awareness campaign, so we focused our efforts on the course
                    on improving the usability of the website in order to make more users stay and find what they are looking for, when they end up on the site.
                </p>
                <h3>The solution</h3>
                <p>
                    In the end, we created a working prototype of the website and conducted a second round of interviews with real social media influencers to gather feedback on the
                    prototype. We also created a roadmap for Naisten Linja that included steps that could be taken in the following months and years regarding
                    marketing campaigns and technical advancements of their services.
                </p>
                <img src={interview2} style={style.pic} alt={'Second round of interviews'} />
                <img src={userbenefits} style={style.pic} alt={'User benefits'} />

            </div>
            <br />
            <a href={'/projects'} style={style.button}>Back</a>
        </div>
    )
}

export default Projects
