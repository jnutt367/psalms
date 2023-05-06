import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Psalms 1 - 150</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    
<main className={styles.main}>
     
      <div className={styles.hero}>
            <h2 className={styles.holy}>THE HOLY</h2>
                <h1 className={styles.bible}>
                    <a href="https://the-holy-bible.vercel.app/" target="_blank">BIBLE</a>
                </h1>
        
        <h1 className={styles.title}>
         PSALMS
        </h1>
        </div>
        <div  className={styles.image}>
       <Image
                                src="/139943824-biblical-vector-illustration-series-moses-received-the-ten-commandments.webp"
                                alt="10 CCommandments"
                                height={900}
                                width={2000}
                                priority
                              />
        </div>                      
       <p className={styles.parables}>Poems or songs of thankfulness, praise, worship and repentance, each one is complete by itself.They show a variety of feeling, emotions, attitudes & interests</p>
 <iframe width="100%" height="250" src="https://www.youtube.com/embed/zRC8COfdzTY" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                   


              <div className={styles.nav}>               
       <a href="https://matthew-coral.vercel.app/">
         <Image className={styles.arrow}
                                src="/chevron-left.svg"
                                alt="Left arrow"
                                height={75}
                                width={75}
                                priority
                              />
       </a>

         <a href="https://gofund.me/a2b590af">
              <Image className={styles.arrow}
                                src="/funding.png"
                                alt="funding-icon"
                                height={75}
                                width={75}
                                priority
                              /> 
       </a>
           
        <a href="https://luke-three.vercel.app/">
           <Image className={styles.arrow}
                                src="/chevron-right.svg"
                                alt="right arrow"
                                 height={75}
                                width={75}
                                priority
                              />
       </a>           
        </div>
   


        

        
       
        <div className={styles.grid}>
        <div className={styles.card}>
            <h2 className={styles.chapter}>PSALM 1 &darr;</h2>
            <p>( A Psalm of David )
Blessed is the one
    who does not walk in step with the wicked
or stand in the way that sinners take
    or sit in the company of mockers,
 but whose delight is in the law of the Lord,
    and who meditates on his law day and night.
 That person is like a tree planted by streams of water,
    which yields its fruit in season
and whose leaf does not wither—
    whatever they do prospers.
    Not so the wicked!
    They are like chaff
    that the wind blows away.
    Therefore the wicked will not stand in the judgment,
    nor sinners in the assembly of the righteous.
    For the Lord watches over the way of the righteous,
    but the way of the wicked leads to destruction.</p>
              </div>

<div className={styles.card}>
            <h2 className={styles.chapter}>PSALM 2 &darr;</h2>
            <p>( A Psalm of David )
 Why do the nations conspire[a]
    and the peoples plot in vain?
 The kings of the earth rise up
    and the rulers band together
    against the Lord and against his anointed, saying,
 “Let us break their chains
    and throw off their shackles.”

 The One enthroned in heaven laughs;
    the Lord scoffs at them.
 He rebukes them in his anger
    and terrifies them in his wrath, saying,
 “I have installed my king
    on Zion, my holy mountain.”

 I will proclaim the Lord’s decree:

He said to me, “You are my son;
    today I have become your father.
 Ask me,
    and I will make the nations your inheritance,
    the ends of the earth your possession.
 You will break them with a rod of iron;
    you will dash them to pieces like pottery.”

 Therefore, you kings, be wise;
    be warned, you rulers of the earth.
 Serve the Lord with fear
    and celebrate his rule with trembling.
 Kiss his son, or he will be angry
    and your way will lead to your destruction,
for his wrath can flare up in a moment.
    Blessed are all who take refuge in him.            </p>
              </div>

<div className={styles.card}>
            <h2 className={styles.chapter}>PSALM 3 &darr;</h2>
            <p>( A Psalm of David )
(when he fled from his son Absolam)
Lord, how many are my foes!
    How many rise up against me!
 Many are saying of me,
    “God will not deliver him.”

 But you, Lord, are a shield around me,
    my glory, the One who lifts my head high.
 I call out to the Lord,
    and he answers me from his holy mountain.

 I lie down and sleep;
    I wake again, because the Lord sustains me.
 I will not fear though tens of thousands
    assail me on every side.

 Arise, Lord!
    Deliver me, my God!
Strike all my enemies on the jaw;
    break the teeth of the wicked.

 From the Lord comes deliverance.
    May your blessing be on your people.

             </p>
              </div>



          </div>
</main>
        <p className={styles.description}> 
        <code className={styles.publisher}>
        Coded, Published & Deployed by His servant: Jason Daniel Nutt 
        </code>
        </p>

     

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
