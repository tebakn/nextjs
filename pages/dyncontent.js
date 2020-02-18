import dynamic from 'next/dynamic'
const DynamicComponentWithCustomLoading = dynamic(
    () => import('../components/hello'),
    { ssr:false}
  )
function dyncontent(){
    return (
        <div>
          <DynamicComponentWithCustomLoading />
          <p>HOME PAGE is here!</p>
        </div>
      )
}
export default dyncontent