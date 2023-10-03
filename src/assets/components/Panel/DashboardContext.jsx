

import {ContentPanelProvider} from '../../../context/ContentPanel'
import Dashboard from './Dashboard'
function DashboardContext() {
  return (
   <ContentPanelProvider>
<Dashboard>
    
</Dashboard>
   </ContentPanelProvider>
  )
}

export default DashboardContext