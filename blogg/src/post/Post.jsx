import "./Post.css"

const Post = ({posts}) => {
  const posted = [
    {
      id: 1,
      title: "Will we ever… understand why music makes us feel good?",
      desc: "No one knows why music has such a potent effect on our emotions. But thanks to some recent studies we have a few intriguing clues.Why do we like music? Like most good questions, this one works on many levels. We have answers on some levels, but not all.We like music because it makes us feel good. Why does it make us feel good? In 2001, neuroscientists Anne Blood and Robert Zatorre at McGill University in Montreal provided an answer. Using magnetic resonance imaging they showed that people listening to pleasurable music had activated brain regions called the limbic and paralimbic areas, which are connected to euphoric reward responses, like those we experience from sex, good food and addictive drugs. Those rewards come from a gush of a neurotransmitter called dopamine. As DJ Lee Haslam told us, music is the drug.But why? It’s easy enough to understand why sex and food are rewarded with a dopamine rush: this makes us want more, and so contributes to our survival and propagation. (Some drugs subvert that survival instinct by stimulating dopamine release on false pretences.) But why would a sequence of sounds with no obvious survival value do the same thing?The truth is no one knows. However, we now have many clues to why music provokes intense emotions. The current favourite theory among scientists who study the cognition of music – how we process it mentally – dates back to 1956, when the philosopher and composer Leonard Meyer suggested that emotion in music is all about what we expect, and whether or not we get it. Meyer drew on earlier psychological theories of emotion, which proposed that it arises when we’re unable to satisfy some desire. That, as you might imagine, creates frustration or anger – but if we then find what we’re looking for, be it love or a cigarette, the payoff is all the sweeter.This, Meyer argued, is what music does too. It sets up sonic patterns and regularities that tempt us to make unconscious predictions about what’s coming next. If we’re right, the brain gives itself a little reward – as we’d now see it, a surge of dopamine. The constant dance between expectation and outcome thus enlivens the brain with a pleasurable play of emotions.",
      img: "images/Post1.jpg",
      category: "Music, Life",
      Wtime: "1 hour Ago",
    },
    {
      id: 2,
      title: "We Are All Confident Idiots",
      desc: "Last March, during the enormous South by Southwest music festival in Austin, Texas, the late-night talk show Jimmy Kimmel Live! sent a camera crew out into the streets to catch hipsters bluffing. “People who go to music festivals pride themselves on knowing who the next acts are,” Kimmel said to his studio audience, “even if they don’t actually know who the new acts are.” So the host had his crew ask festival-goers for their thoughts about bands that don’t exist. “The big buzz on the street,” said one of Kimmel’s interviewers to a man wearing thick-framed glasses and a whimsical T-shirt, “is Contact Dermatitis. Do you think he has what it takes to really make it to the big time?”“Absolutely,” came the dazed fan’s reply.The prank was an installment of Kimmel’s recurring “Lie Witness News” feature, which involves asking pedestrians a variety of questions with false premises. In another episode, Kimmel’s crew asked people on Hollywood Boulevard whether they thought the 2014 film Godzilla was insensitive to survivors of the 1954 giant lizard attack on Tokyo; in a third, they asked whether Bill Clinton gets enough credit for ending the Korean War, and whether his appearance as a judge on America’s Got Talent would damage his legacy. “No,” said one woman to this last question. “It will make him even more popular.”One can’t help but feel for the people who fall into Kimmel’s trap. Some appear willing to say just about anything on camera to hide their cluelessness about the subject at hand (which, of course, has the opposite effect). Others seem eager to please, not wanting to let the interviewer down by giving the most boringly appropriate response: I don’t know. But for some of these interviewees, the trap may be an even deeper one. The most confident-sounding respondents often seem to think they do have some clue—as if there is some fact, some memory, or some intuition that assures them their answer is reasonable.",
      img: "images/Post2.jpg",
      category: "Psychology",
      Wtime: "3 hour Ago",
    },
    {
      id: 3,
      title: "The Place to Disappear",
      desc: "All languages are welcome on Bangkok's Khao San Road, including Drunkard. Hold my hand, a man fluent in Singapore Slings commanded a Scottish hairdresser one night at Lucky Beer and Guest House -- only in his dialect it came out soggy and rounded, more like Hole mah han. Not right now, the Scottish hairdresser said. She was a slender girl with the pinkish pallor of a milkmaid, blond hair, gray eyes, and a nose ring. She was on a six-week trip through Asia with two cute friends from Glasgow. They'd just arrived on a super-discount flight from Scotland and had checked into a seven-dollar-a-night room at one of the several hundred or so cheap guesthouses around Khao San Road-Happy Home Guest House or Nirvana Caf and Guest House or Sweety's or Lek Mam's or something; they actually couldn't remember what it was called, but they knew how to find their way back. They also knew how to get from their guesthouse to the new branch of Boots, the English drugstore, which opened recently amid the T-shirt shops and travel agencies that line Khao San. Within their first few hours in Bangkok, the girls went to Boots and blew their travel budget on English soap and shampoo-same soap and shampoo they could get at home but somehow more exotic-seeming when bought in Thailand-and on snack packages of Oreos, which they worship and which are not easy to find in the United Kingdom. They thought Khao San was horrible because it was so crowded and loud and the room in the guesthouse was so dingy, but it was brilliant, too, because it was so inexpensive, and there were free movies playing at all the bars, and because they'd already run into two friends from home. On top of that, finding a branch of Boots right here was almost too good to be true. What's more, Boots was super-air-conditioned, and that distinguished it from many of the other Khao San Road shops, which were open to the hot and heavy Bangkok air.",
      img: "images/Post3.jpg",
      category: "Tour & Travel",
      Wtime: "5 hour Ago",
    }
  ];
  
  return (
    <div className="post">
    {posted.map((p) => (
    <div className="mapfunc">
        <img className="postImg" src={p.img} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">{p.category}</span>
            </div>
            <span className="postTitle">{p.title}</span>
            <hr />
            <span className="postDate">{p.Wtime}</span>
            </div>
            <p className="postDesc">
                {p.desc}  
            </p>
    </div>
    ))}
    </div>
  )
}

export default Post
