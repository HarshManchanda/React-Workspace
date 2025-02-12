import React, { useState } from 'react';
import plus from '../assets/images/Plus.svg'
import excel from '../assets/images/excel.svg'
import businessman from '../assets/images/businessman.svg'
import page from '../assets/images/page.svg'
import folder from '../assets/images/folder.svg'
import salary from '../assets/images/salary.svg'
import form from '../assets/images/form.svg'
import mail from '../assets/images/mail.svg'
import holiday from '../assets/images/holiday.svg'
import leave from '../assets/images/leave.svg'
import wfh from '../assets/images/work-from-home.svg'
import birthday from '../assets/images/birthday.svg'
import anniversary from '../assets/images/anniversary.svg'
import new_joinee from '../assets/images/new-joinee.svg'
import eleanor from '../assets/images/eleanor-pena.png'
import arlene from '../assets/images/arlene-mcCoy.png'
import guy_hawkins from '../assets/images/guy-hawkins.png'
import devon_lane from '../assets/images/devon-lane.png'
import bessie from '../assets/images/bessie-cooper.png'
import post from '../assets/images/post.svg'
import polling from '../assets/images/polling.svg'

function Organization(){
    const [activeTab, setActiveTab] = useState('birthdaysTab');
    const [activePostPoll, setActivePostPoll] = useState('postContent');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handlePostPollChange = (panel) => {
        setActivePostPoll(panel);
    };

    return (
        <>
        <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        <div className="contentBox">
            <h3>Organization</h3>
            <div className="organizationRow">
                <div className="organizationCol birthdayTabCol">
                    <div className="tabContainer">
                        <div className="tabHeaders">
                            <div className={`tabHeader ${activeTab === 'birthdaysTab' ? 'active' : ''}`} onClick={() => handleTabChange('birthdaysTab')}>
                                <img src={birthday} alt="Birthday" />Birthdays
                            </div>
                            <div className={`tabHeader ${activeTab === 'workAnniversariesTab' ? 'active' : ''}`} onClick={() => handleTabChange('workAnniversariesTab')}>
                                <img src={anniversary} alt="Anniversary" />Work Anniversaries
                            </div>
                            <div className={`tabHeader ${activeTab === 'newJoineeTab' ? 'active' : ''}`} onClick={() => handleTabChange('newJoineeTab')}>
                                <img src={new_joinee} alt="New Joinee" />New Joinee
                            </div>
                        </div>
                        <div className="tabContents">
                            <div className={`tabContent ${activeTab === 'birthdaysTab' ? 'active' : ''}`} id="birthdaysTab">
                                <div className="birthdayBox">
                                    <h4>Today's</h4>
                                    <div className="birthdayList">
                                        <div className="birthdayItem">
                                            <img src={eleanor} className="profileImage" alt="Eleanor Pena" />
                                            Eleanor Pena
                                        </div>
                                        <div className="birthdayItem">
                                            <img src={arlene} className="profileImage" alt="Arlene McCoy" />
                                            Arlene McCoy
                                        </div>
                                    </div>
                                </div>
                                <div className="birthdayBox">
                                    <h4>Upcoming</h4>
                                    <div className="birthdayList">
                                        <div className="birthdayItem">
                                            <img src={guy_hawkins} className="profileImage" alt="Guy Hawkins" />
                                            Guy Hawkins
                                        </div>
                                        <div className="birthdayItem">
                                            <img src={devon_lane} className="profileImage" alt="Devon Lane" />
                                            Devon Lane
                                        </div>
                                        <div className="birthdayItem">
                                            <img src={bessie} className="profileImage" alt="Bessie Cooper" />
                                            Bessie Cooper
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tabContent ${activeTab === 'workAnniversariesTab' ? 'active' : ''}`} id="workAnniversariesTab">
                                <h4>Work Anniversaries Content</h4>
                            </div>
                            <div className={`tabContent ${activeTab === 'newJoineeTab' ? 'active' : ''}`} id="newJoineeTab">
                                <h4>New Joinee Content</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="organizationCol postTabCol">
                    <div className="postPollWrapper">
                        <div className="postPollNavigation">
                            <div className={`postPollTab ${activePostPoll === 'postContent' ? 'activePostPoll' : ''}`} onClick={() => handlePostPollChange('postContent')}>
                                <img src={post} alt="Post" />Post
                            </div>
                            <div className={`postPollTab ${activePostPoll === 'pollContent' ? 'activePostPoll' : ''}`} onClick={() => handlePostPollChange('pollContent')}>
                                <img src={polling} alt="Poll" />Poll
                            </div>
                        </div>
                        <div className="postPollContainer">
                            <div className={`postPollContent ${activePostPoll === 'postContent' ? 'activePostPollPanel' : ''}`} id="postContent">
                                <p>Write your post here and mention your peers</p>
                            </div>
                            <div className={`postPollContent ${activePostPoll === 'pollContent' ? 'activePostPollPanel' : ''}`} id="pollContent">
                                <p>Create a poll and engage with your peers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="organizationCol announceMentCol">
                    <div className="quickAccessCard purpleCard">
                        <div className="qAHead">
                            <h4>Announcement</h4>
                        </div>
                        <div className="qABody">
                            <p>No announcement</p>
                            <a href="" className="addAnnouncementBtn">+ Add</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Organization;