USE clinicals
GO
/****** Object:  Table [dbo].[registry]    Script Date: 5/7/2020 6:53:05 PM ******/
DROP TABLE [dbo].[registry]
GO
/****** Object:  Table [dbo].[LeftSideMenu]    Script Date: 5/7/2020 6:53:05 PM ******/
DROP TABLE [dbo].[LeftSideMenu]
GO
/****** Object:  Table [dbo].[LeftSideMenu]    Script Date: 5/7/2020 6:53:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeftSideMenu](
	[id] [int] NOT NULL,
	[registry_id] [int] NOT NULL,
	[menuGroup] [varchar](50) NOT NULL,
	[subMenuText] [varchar](50) NOT NULL,
	[subMenuIcon] [varchar](9) NOT NULL,
	[submenulink] [varchar](23) NOT NULL,
	[active] [varchar](1) NOT NULL,
	[pageGroupID] [int] NOT NULL,
	[subgrouporder] [int] NULL,
	[SortOrder] [int] NOT NULL,
	[PageName] [varchar](50) NOT NULL,
	[ProjectGroup] [varchar](50) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[registry]    Script Date: 5/7/2020 6:53:05 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[registry](
	[id] [int] NOT NULL,
	[title] [varchar](50) NOT NULL,
	[description] [varchar](256) NULL,
	[name] [varchar](50) NULL,
	[content] [varchar](50) NULL,
	[img1] [varchar](1) NOT NULL,
	[img2] [varchar](1) NOT NULL,
	[mainImg] [varchar](1) NOT NULL,
	[text1] [varchar](1) NOT NULL,
	[text2] [varchar](1) NOT NULL,
	[menulabel] [varchar](50) NULL,
	[landingpagehtml] [text] NULL,
	[groupid] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (705, 3, N'Patient Forms', N'Form', N'dashboard', N'*./clinical_forms.html*', N'', 3, 1, 1, N'VESForms', N'Durable')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (1, 1, N'Data Analysis', N'Subgroup Analysis', N'dashboard', N'*./clinical_forms.html*', N'', 3, 2, 1, N'Subgroup Analysis', N'Durable')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (2, 3, N'Participants', N'Hospitals', N'dashboard', N'*./clinical_forms.html*', N'', 3, 3, 1, N'Hospitals', N'Durable')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (12, 3, N'Registry', N'User Profiles', N'dashboard', N'*./clinical_forms.html*', N'', 3, 4, 1, N'Site Manager', N'Durable')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (79, 3, N'Registry', N'Study Groups', N'dashboard', N'*./clinical_forms.html*', N'', 3, 4, 2, N'Study Groups', N'Durable')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (965, 3, N'Patient Management', N'Add / Update Patients', N'dashboard', N'*./clinical_forms.html*', N'', 168, 1, 1, N'LVISForm', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (966, 3, N'Patient Management', N'Update Followups', N'dashboard', N'*./clinical_forms.html*', N'', 168, 1, 2, N'LVISFollowups', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (967, 3, N'Subgroup Analysis', N'Subgroup Analysis', N'dashboard', N'*./clinical_forms.html*', N'', 168, 2, 1, N'Subgroup Analysis', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (974, 3, N'Participants', N'Hospitals', N'dashboard', N'*./clinical_forms.html*', N'', 168, 3, 1, N'Hospitals', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (975, 3, N'Participants', N'Assign User Security', N'dashboard', N'*./clinical_forms.html*', N'', 168, 3, 2, N'Site Manager', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (973, 3, N'System', N'Site Help Library', N'dashboard', N'*./clinical_forms.html*', N'', 168, 4, 0, N'Site Help Manager', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (972, 3, N'System', N'Preview Clinical Form', N'dashboard', N'*./clinical_forms.html*', N'', 168, 4, 1, N'LVISReport', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (968, 3, N'System', N'User Registration', N'dashboard', N'*./clinical_forms.html*', N'', 168, 4, 2, N'UserManager', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (969, 3, N'System', N'Email / Password', N'dashboard', N'*./clinical_forms.html*', N'', 168, 4, 3, N'UserProfile', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (971, 3, N'System', N'Audit Log', N'dashboard', N'*./clinical_forms.html*', N'', 168, 4, 4, N'AuditLog', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (970, 3, N'System', N'Logout', N'dashboard', N'*./clinical_forms.html*', N'', 168, 4, 5, N'Logout', N'Block Study')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (112, 3, N'Admin Tools', N'Task List', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, -1, N'Task List', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (864, 3, N'Admin Tools', N'Report Library', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 0, N'ReportLibrary', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (13, 3, N'Admin Tools', N'Menus', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 1, N'.Menus', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (84, 3, N'Admin Tools', N'Layouts', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 4, N'.Layouts', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (34, 3, N'Admin Tools', N'Data Source', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 5, N'.Data Sources', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (103, 3, N'Admin Tools', N'Child Objects', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 5, N'Child Objects', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (45, 3, N'Admin Tools', N'Page Objects', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 6, N'.PageObjects', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (102, 3, N'Admin Tools', N'Page Design', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 6, N'Page Design', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (108, 3, N'Admin Tools', N'Run Design Build', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 7, N'Design Build', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (633, 3, N'Admin Tools', N'Xaml', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 10, N'WebXaml', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (706, 3, N'Admin Tools', N'Landing Page Html', N'dashboard', N'*./clinical_forms.html*', N'', 7, 1, 11, N'Landing Page Html', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (362, 3, N'Extra Tools', N'Hospitals', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 1, N'Hospitals', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (36, 3, N'Extra Tools', N'Registries', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 2, N'Registry', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (166, 3, N'Extra Tools', N'Coils Table', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 3, N'.CoilTable', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (941, 3, N'Extra Tools', N'Reports', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 3, N'.Reports', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (124, 3, N'Extra Tools', N'Table Lookups', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 4, N'.Lookup Tables', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (133, 3, N'Extra Tools', N'User Profile', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 5, N'UserProfile', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (83, 3, N'Extra Tools', N'Audit Log', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 6, N'.AuditLogAll', N'Admin')
INSERT [dbo].[LeftSideMenu] ([id], [registry_id], [menuGroup], [subMenuText], [subMenuIcon], [submenulink], [active], [pageGroupID], [subgrouporder], [SortOrder], [PageName], [ProjectGroup]) VALUES (883, 3, N'Extra Tools', N'Form Field Listing', N'dashboard', N'*./clinical_forms.html*', N'', 7, 2, 7, N'FormFieldListing', N'Admin')
SET IDENTITY_INSERT [dbo].[registry] ON 

INSERT [dbo].[registry] ([id], [title], [description], [name], [content], [img1], [img2], [mainImg], [text1], [text2], [menulabel], [landingpagehtml], [groupid]) VALUES (1, N'Durable', N'Welcome to the Durable Registry', N'Durable Registry', N'Durable', N'', N'', N'', N'', N'', N'Durable', N'<html>
    <head>
    </head>
    <body>
        <table cellpadding="10">
            <tbody>
                <tr>
                    <td>
                    <div style="font-size: 18pt; font-family: Tahoma" align="center">&nbsp;Welcome to the Durable Registry!</div>
                    <div><span class="Normal" id="dnn_ctr390_HtmlModule__ctl0_lblContent" style="font-size: 10pt; font-family: Tahoma"><font face="TimesNewRomanPSMT">
                    <p align="justify"><img height="140" alt="" hspace="10" src="/uploads/fon102.gif" width="108" align="left" border="0" />Longitudinal studies suggest that large and giant intracranial aneurysms carry a poor natural history</font><font face="TimesNewRomanPSMT" size="1">2</font><font face="TimesNewRomanPSMT">. The treatment of such aneurysms remains challenging with increasingly more endovascular techniques being utilized to treat such lesions. Clinical and radiographic events are widely reported in the management of large and giant aneurysms including ischemic and hemorrhagic sequelae. Less commonly, inflammatory events such as spontaneous thrombosis, peri-aneurysmal edema, communicating hydrocephalus and aseptic meningitis have also been reported</font><font face="TimesNewRomanPSMT" size="1">3-11</font><font face="TimesNewRomanPSMT">. These events frequently have clinical sequelae requiring active medical treatment. Identification of the factors related to these events is critical. By identifying these factors clinicians will be able to minimize the morbidity associated with the treatment of these challenging aneurysms and provide appropriate therapeutic strategies, as well as efficient surveillance guidelines in their overall management.<img height="113" alt="" hspace="10" src="/uploads/fon101.gif" width="121" align="right" border="0" /></p>
                    <p align="justify">To determine the incidence and identify potential risk factors for the development of such events a prospective, multi-centered study is required. Investigators will not be required to alter current practice patterns in any way as this study is intended to simply determine the incidence of such events and identify potential risk factors. This allows for the participating clinicians to have complete independence in the management of the patient. </p>
                    <div align="justify">An estimated 30 centers each contributing approximately 10 patients per year over a 2 year period would generate approximately 600 patients.</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    <div>&nbsp;</div>
                    </font></span><! End_Module_390 ></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>
', 3)
INSERT [dbo].[registry] ([id], [title], [description], [name], [content], [img1], [img2], [mainImg], [text1], [text2], [menulabel], [landingpagehtml], [groupid]) VALUES (3, N'Admin', N'System Administration', N'System Development Tools', N'Administration', N'', N'', N'', N'', N'', N'Administration', NULL, 7)
INSERT [dbo].[registry] ([id], [title], [description], [name], [content], [img1], [img2], [mainImg], [text1], [text2], [menulabel], [landingpagehtml], [groupid]) VALUES (2, N'Block Study', N'Welcome ...', N'Block Study', N'Block Study', N'', N'', N'', N'', N'', N'Block Study', NULL, 168)
SET IDENTITY_INSERT [dbo].[registry] OFF
