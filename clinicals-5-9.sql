USE [master]
GO
/****** Object:  Database [clinicals]    Script Date: 5/9/2020 1:36:22 PM ******/
CREATE DATABASE [clinicals]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'clinicals', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\clinicals.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'clinicals_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\clinicals_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [clinicals] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [clinicals].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [clinicals] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [clinicals] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [clinicals] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [clinicals] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [clinicals] SET ARITHABORT OFF 
GO
ALTER DATABASE [clinicals] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [clinicals] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [clinicals] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [clinicals] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [clinicals] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [clinicals] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [clinicals] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [clinicals] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [clinicals] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [clinicals] SET  DISABLE_BROKER 
GO
ALTER DATABASE [clinicals] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [clinicals] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [clinicals] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [clinicals] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [clinicals] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [clinicals] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [clinicals] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [clinicals] SET RECOVERY FULL 
GO
ALTER DATABASE [clinicals] SET  MULTI_USER 
GO
ALTER DATABASE [clinicals] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [clinicals] SET DB_CHAINING OFF 
GO
ALTER DATABASE [clinicals] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [clinicals] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [clinicals] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'clinicals', N'ON'
GO
ALTER DATABASE [clinicals] SET QUERY_STORE = OFF
GO
USE [clinicals]
GO
/****** Object:  User [root]    Script Date: 5/9/2020 1:36:23 PM ******/
CREATE USER [root] FOR LOGIN [root] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  User [allware]    Script Date: 5/9/2020 1:36:23 PM ******/
CREATE USER [allware] FOR LOGIN [allware] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[LeftSideMenu]    Script Date: 5/9/2020 1:36:23 PM ******/
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
/****** Object:  Table [dbo].[registry]    Script Date: 5/9/2020 1:36:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[registry](
	[id] [int] NOT NULL,
	[title] [varchar](50) NOT NULL,
	[description] [varchar](256) NULL,
	[name] [varchar](50) NULL,
	[content] [text] NULL,
	[img1] [text] NOT NULL,
	[img2] [text] NOT NULL,
	[mainImg] [text] NOT NULL,
	[text1] [text] NOT NULL,
	[text2] [text] NOT NULL,
	[menulabel] [varchar](50) NULL,
	[landingpagehtml] [text] NULL,
	[groupid] [int] IDENTITY(1,1) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [clinicals] SET  READ_WRITE 
GO
