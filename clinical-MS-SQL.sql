USE [clinicals]
GO
/****** Object:  Table [dbo].[registry]    Script Date: 5/7/2020 1:16:11 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[registry](
	[id] [bigint] NOT NULL,
	[title] [varchar](max) NULL,
	[description] [varchar](max) NULL,
	[name] [varchar](max) NULL,
	[content] [varchar](max) NULL,
	[img1] [text] NULL,
	[img2] [text] NULL,
	[mainImg] [text] NULL,
	[text1] [text] NULL,
	[text2] [text] NULL,
 CONSTRAINT [PK_registry] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[registry] ([id], [title], [description], [name], [content], [img1], [img2], [mainImg], [text1], [text2]) VALUES (1, N'Durable', N'Welcome to the Durable Registry', N'DURABLE Registry', N'DUrable Results in Aneurysms with Better Long-term Efficacy', N'assets/img/city-profile.jpg', N'assets/img/sidebar-3.jpg', N'["assets/img/sidebar-4.jpg", "assets/img/sidebar-1.jpg", "assets/img/cover.jpg", "assets/img/city-profile.jpg", "assets/img/sidebar-2.jpg", "assets/img/sidebar-3.jpg"]', N'3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', N'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
INSERT [dbo].[registry] ([id], [title], [description], [name], [content], [img1], [img2], [mainImg], [text1], [text2]) VALUES (2, N'Third', N'Welcome to the Durable Registry', N'DURABLE Registry', N'DUrable Results in Aneurysms with Better Long-term Efficacy', N'assets/img/city-profile.jpg', N'assets/img/sidebar-3.jpg', N'["assets/img/sidebar-4.jpg", "assets/img/sidebar-1.jpg", "assets/img/cover.jpg", "assets/img/city-profile.jpg", "assets/img/sidebar-2.jpg", "assets/img/sidebar-3.jpg"]', N'3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', N'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
INSERT [dbo].[registry] ([id], [title], [description], [name], [content], [img1], [img2], [mainImg], [text1], [text2]) VALUES (3, N'Second', N'Welcome to the Durable Registry', N'DURABLE Registry', N'DUrable Results in Aneurysms with Better Long-term Efficacy', N'assets/img/city-profile.jpg', N'assets/img/sidebar-3.jpg', N'["assets/img/sidebar-4.jpg", "assets/img/sidebar-1.jpg", "assets/img/cover.jpg", "assets/img/city-profile.jpg", "assets/img/sidebar-2.jpg", "assets/img/sidebar-3.jpg"]', N'3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', N'4Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
