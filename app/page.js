export default function Home() {
  return (
    <div className='flex flex-col items-center mt-10 mb-20'>
      <h1 className='text-5xl font-bold'>Asphalt Contractor Web Banners</h1>

      <h2 className='text-3xl mt-10'>January</h2>

      <section className='my-10'>
        <h4 className='text-xl font-bold mb-5'>970 x 90</h4>
        <a
          href='http://www.transtechsys.com/products/digitalAC'
          target='_blank'
        >
          <img src='/AC970x90Animated.gif' alt='970x90' className='w-[970px]' />
        </a>
        <h5 className='mt-3'>
          <a href='/AC970x90AnimatedEx.png' target='_blank'>
            Example Placement
          </a>
        </h5>
      </section>

      <section className='my-10'>
        <h4 className='text-xl font-bold mb-5'>728 x 90</h4>
        <a href='http://www.transtechsys.com/products/pqi380' target='_blank'>
          <img src='/AC728x90Animated.gif' alt='728x90' className='w-[728px]' />
        </a>
        <h5 className='mt-3'>
          <a href='/AC728x90AnimatedEx.png' target='_blank'>
            Example Placement
          </a>
        </h5>
      </section>

      <section className='my-10'>
        <h4 className='text-xl font-bold mb-5'>300 x 600</h4>
        <a href='http://www.transtechsys.com/products/pqi380' target='_blank'>
          <img src='/AC600x300Static.png' alt='600x300' className='w-[300px]' />
        </a>
        <h5 className='mt-3'>
          <a href='/AC600x300StaticEx.png' target='_blank'>
            Example Placement
          </a>
        </h5>
      </section>

      <section className='my-10'>
        <h4 className='text-xl font-bold mb-5'>300 x 250</h4>
        <a href='http://www.transtechsys.com/products/pqi380' target='_blank'>
          <img
            src='/AC300x250Animated.gif'
            alt='300x250'
            className='w-[300px]'
          />
        </a>
        <h5 className='mt-3'>
          <a href='/AC300x250AnimatedEx.png' target='_blank'>
            Example Placement
          </a>
        </h5>
      </section>

      <section className='my-10'>
        <h4 className='text-xl font-bold mb-5'>300 x 50</h4>
        <a href='http://www.transtechsys.com/products/pqi380' target='_blank'>
          <img src='/AC300x50Static.png' alt='300X50' className='w-[300px]' />
        </a>
      </section>
    </div>
  );
}
