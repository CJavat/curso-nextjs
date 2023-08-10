import { DarkLayout } from '@/components/layouts/DarkLayout'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1 className={'title'}>
        About Page
      </h1>
      
      <p className={'description'}>
        Get started by editing&nbsp;
        <code className={'code'}>pages/about.tsx</code>
      </p>
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  );
}