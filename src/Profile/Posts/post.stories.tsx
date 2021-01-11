import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import Post, {PostTypeProps} from "./Post/Post";
import {action} from "@storybook/addon-actions";


export default {
    title: 'SocialNetwork /PostStories',
    component: Post,

} as Meta;

const Template: Story<PostTypeProps> = (args) => {
    const fun = () => {
       action('Likes')()
    }
    return <Post {...args} fun={fun}/>;
}

export const post1 = Template.bind({})
post1.args = {
    id: 6,
    name: "Alex",
    date: "29.12.2020",
    textPost: "Hello this is my firs post",
    /*

       HEEEEEEEEEYYYY This is my comment
        */
    likes: 25,
    imgPost: "post1",


}

