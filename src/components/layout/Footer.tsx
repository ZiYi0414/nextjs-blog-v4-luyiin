
export default function Footer() {
  return (
    <footer className='my-16 text-right text-[#b3b3b3] '>
      <section className='flex flex-col items-end'>
        <div>
          <a
            href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
            rel='noreferrer'
            target='_blank'
          >
            CC BY-NC-SA 4.0
          </a>{' '}
          {new Date().getFullYear()}
          <a
            href='https://github.com/ZiYi0414'
            target='_blank'
            className='pl-1'
            rel='noreferrer'
          >
            © Luyiin kk1
          </a>
        </div>
      </section>
    </footer>
  );
}