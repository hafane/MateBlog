import { AuthorHeadProps } from "@/components/screens/author/head/author-head.type"

export const SOCIALS = [
	{
		name: "Terms of use",
		link: "https://www.facebook.com/",
	},
	{
		name: "Privacy Policy",
		link: "https://x.com/",
	},
	{
		name: "Cookie Policy",
		link: "https://youtube.com/",
	},
]

export const HOME_TABS = [
	{ id: 1, name: "latest" },
	{ id: 2, name: "popular" },
]

export const USER_MENU = [
	{ name: "Profile", path: "/profile" },
	{ name: "Bookmarks", path: "/bookmarks" },
]

//del this later
export const MOCK_POSTS = [
	{
		id: 1,
		image: "../assets/Image.png",
		tags: ["technology", "work"],
		authorImage: "../assets/Image(1).png",
		date: "August 20, 2022",
		title:
			"The Impact of Technology on the Workplace: How Technology is Changing",
		author: "Tracey Wilson",
	},
	{
		id: 2,
		image: "../assets/Image.png",
		tags: ["technology", "work"],
		authorImage: "../assets/Image(1).png",
		date: "August 20, 2022",
		title:
			"The Impact of Technology on the Workplace: How Technology is Changing",
		author: "Tracey Wilson",
	},
	{
		id: 3,
		image: "../assets/Image.png",
		tags: ["technology", "work"],
		authorImage: "../assets/Image(1).png",
		date: "August 20, 2022",
		title:
			"The Impact of Technology on the Workplace: How Technology is Changing",
		author: "Tracey Wilson",
	},
	{
		id: 4,
		image: "../assets/Image.png",
		tags: ["technology", "work"],
		authorImage: "../assets/Image(1).png",
		date: "August 20, 2022",
		title:
			"The Impact of Technology on the Workplace: How Technology is Changing",
		author: "Tracey Wilson",
	},
]

//delete this later
export const TAGS_LIST = [
	{ id: 1, name: "technology" },
	{ id: 2, name: "work" },
	{ id: 3, name: "lifestyle" },
	{ id: 4, name: "health" },
	{ id: 5, name: "travel" },
	{ id: 6, name: "food" },
]

//delete this later
export const MOCK_COMMENTS = [
	{
		id: 1,
		author: "John Doe",
		authorImage: "",
		date: "August 20, 2022",
		text: "Great post!",
		postId: 1,
	},
	{
		id: 2,
		author: "John Doe",
		authorImage: "",
		date: "August 20, 2022",
		text: "Great post!",
		postId: 1,
	},
	{
		id: 3,
		author: "John Doe",
		authorImage: "",
		date: "August 20, 2022",
		text: "Great post!",
		postId: 1,
	},
	{
		id: 4,
		author: "John Doe",
		authorImage: "",
		date: "August 20, 2022",
		text: "Hello hi dfsdfsdfdsssssssssssssssssssss sdfs fsdf sdf sdf sd",
		postId: 1,
	},
	{
		id: 5,
		author: "John Doe",
		authorImage: "",
		date: "August 20, 2022",
		text: "Lorem ipsum dolor sit amet et consectetur adipiscing elit fab ewrwe ewr wrwe rwer wer wer wer wr were ",
		postId: 1,
	},
]

//delete this later
export const AUTHOR: AuthorHeadProps = {
	author: {
		name: "Jonathan Doe",
		sign: "Collaborator & Editor",
		description:
			"Meet Jonathan Doe, a passionate writer and blogger with a love for technology and travel. Jonathan holds a degree in Computer Science and has spent years working in the tech industry, gaining a deep understanding of the impact technology has on our lives.",
		socials: [
			{ platform: "FaFacebook", url: "https://www.facebook.com/" },
			{ platform: "FaXTwitter", url: "https://twitter.com/" },
			{ platform: "FaInstagram", url: "https://www.instagram.com/" },
		],
	},
}
