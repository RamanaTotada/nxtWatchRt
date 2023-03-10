import styled from 'styled-components'

export const HomePageBackground = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: flex-start;
`
export const BelowHeaderBackground = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  overflow-y: auto;
`
export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 230px;
  flex-shrink: 0;
  background-color: ${props => (props.darkMode ? '#212121' : 'white')};
`
export const MainSection = styled.div`
  background-color: ${props => (props.darkMode ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 75%;
  flex-grow: 1;
  overflow-y: auto;
`
export const VideosSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
  padding: 20px 50px 20px 50px;
`
export const TestCase = styled.div`
  background-color: ${props => {
    if (props.outline) {
      return props.darkMode ? '#383838' : '#e2e8f0'
    }
    return 'transparent'
  }};
  display: flex;
  padding: 12px 5px 10px 15px;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-start;
  color: ${props => (props.outline ? ' #1e293b' : '#475569')};
  font-weight: ${props => (props.outline ? ' bold' : '400')};
`

export const HomeIcon = styled.button`
  color: ${props => (props.outline ? ' red' : '#475569')};
  background-color: transparent;
  border: none;
  margin: 0px 15px 0px 0px;
  font-size: 20px;
  padding: 0px;
`
export const SideBarHeadings = styled.p`
  font-size: 16px;
  margin: 0px 0px 4px;
  color: ${props => (props.darkMode ? '#f9f9f9' : '')};
`

export const SidebarFooterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  flex-grow: 1;
  padding-left: 15px;
  padding-bottom: 25px;
  padding-right: 10px;
`
export const Sidebarlogos = styled.img`
  height: 30px;
  margin-right: 15px;
`
export const SidebarLogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ContactusHeading = styled.p`
  font-size: ${props => props.font};
  color: #475569;
  font-weight: ${props => props.weight};
`

export const FailureImage = styled.img`
  align-self: center;
  height: 250px;
  margin-top: 15px;
`
export const HeadingFailure = styled.h1`
  color: ${props => (props.darkMode ? '#f9f9f9' : '')};
  text-align: center;
  font-size: 28px;
`
export const FailureDescription = styled.p`
  font-size: 16px;
  text-align: center;
  margin-top: 5px;
`
export const FailureTryAgain = styled.button`
  border: none;
  background-color: #4f46e5;
  color: white;
  align-self: center;
  width: 100px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`
export const TrendingHeadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${props => (props.darkMode ? '#181818' : '#f1f1f1')};
  padding: 20px 50px 20px 50px;
`
export const TrendingLogo = styled.div`
  height: 80px;
  width: 80px;
  background-color: ${props => (props.darkMode ? '#383838' : '#e2e8f0')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 30px;
  color: red;
`
export const TrendingsectionHeading = styled.h1`
  color: ${props => (props.darkMode ? '#f1f1f1' : '#383838')};
  margin-left: 25px;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
