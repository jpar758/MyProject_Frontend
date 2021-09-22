import React from "react";
import githubLogo from "../../assets/logos/github_logo.svg";
import { Story, Meta } from "@storybook/react";
import BlogCard, { BlogCardProp } from "./BlogCard";

export default {
  title: "Example/BlogCard",
  component: BlogCard,
} as Meta;

const Template: Story<BlogCardProp> = (args) => <BlogCard {...args} />;

export const testCard = Template.bind({});
testCard.args = {
  Author: "James",
  Name: "BurgerKing",
  ImageUrl:
    "https://www.burgerking.co.nz/sites/all/themes/custom/bk_theme/img/reopening/hero.jpg",
  Location: "queen street",
  Description: "This placeis the best",
  Positive: 2,
  Negative: 1,
};
