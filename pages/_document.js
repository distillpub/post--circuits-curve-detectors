import Document, { Html, Head, Main, NextScript } from 'next/document'
import styles from './styles'
import Figure from 'components/figure'
import Banner from './banner'

class MyDocument extends Document {
  render() {
    const byline = {
      title: 'Curve Detectors',
      description:
        'Part one in a three part deep exploration into a neuron family.',
      authors: [
        {
          author: 'Nick Cammarata',
          authorURL: 'http://nickcammarata.com',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Gabriel Goh',
          authorURL: 'http://gabgoh.github.io',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Shan Carter',
          authorURL: 'http://shancarter.com',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Ludwig Schubert',
          authorURL: 'https://schubert.io/',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Michael Petrov',
          authorURL: 'https://twitter.com/mpetrov',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
        {
          author: 'Chris Olah',
          authorURL: 'https://colah.github.io',
          affiliation: 'OpenAI',
          affiliationURL: 'https://openai.com',
        },
      ],
    }
    return (
      <Html>
        <Head />
        <body>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=1250" />
          <style dangerouslySetInnerHTML={{ __html: styles() }} />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css"
            integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG"
            crossOrigin="anonymous"
          />
          <d-front-matter>
            <script
              type="text/json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(byline) }}
            ></script>
          </d-front-matter>
          <d-title>
            <Figure id="page-banner" banner>
              <Banner />
            </Figure>
          </d-title>
          <d-byline></d-byline>
          <Main />
          <NextScript />
          <d-bibliography src="/bibliography.bib"></d-bibliography>
          <script src="https://distill.pub/template.v2.js"></script>
          <d-appendix>
            <d-footnote-list></d-footnote-list>
            <d-citation-list></d-citation-list>

            <h3>Author Contributions</h3>
            <p>
              It’s often hard to separate scientific contributions by paper, as
              the ideas are usually developed before researchers decide where to
              draw the boundaries between publications. This is more pronounced
              in the threads format Circuits uses. We started writing a single
              paper on the curve family but later decided to split it into three
              publications grouped by neuron behavior, circuits, and model
              comparison. Although we’ve tried to isolate the contributions to
              Curve Detectors specifically, when the contributions were made we
              didn’t know we’d publish on these sub-topics of the curve family
              separately.
            </p>

            <p>
              <b>Interface Design &amp; Prototyping.</b> Many of the figures in
              this article started with early Colab prototypes from Chris in mid
              2018, which Nick built upon and refined. Nick and Gabriel iterated
              together on crafting the “Smarter Curve Analysis” section.
            </p>

            <p>
              <b>Conceptual Contributions.</b> In mid 2018 Chris noticed that
              curves formed a family and started doing early prototypes of
              experiments that rendered their activations into tuning curves and
              synthetic activation maps. Nick and Chris iterated on these early
              experiments to understand curve neurons in more detail, finding
              properties like the combing effect. The radial tuning curve was
              suggested and implemented by Nick. Chris proposed hand-labeling
              dataset examples and Nick proposed rendering their attribution
              vectors to causally understand them. Nick made the connection to
              classical curve detection, and conceived of using attribution
              visualizations to do curve extraction and differential spline
              parameterization to do curve tracking. Gabriel created a practical
              differential spline parameterization and wrote the code powering
              the curve tracing experiments. The quilt of NMF factors used to
              show curve tracing was inspired by earlier unpublished work by
              Nick and Chris.
            </p>

            <p>
              <b>Writing.</b> Nick and Chris wrote the text of the article, with
              significant contributions from Gabe.
            </p>

            <p>
              <b>Infrastructure.</b> Nick built the infrastructure for
              extracting figures from the paper for reproduction in Colab.
              Ludwig is responsible for the distributed infrastructure that was
              used for many experiments, and helped with the alpha
              parameterizations that attribution uses.
            </p>

            <h3>Acknowledgements</h3>
            <p>
              Our article was greatly improved thanks to the detailed feedback
              by Vincent Tjeng, Nikita Obidin, Stefan Sietzen, Dave Vladman,
              Fred Hohman, Nick Moran, Sophia Sanborrn, Max Hodak, and Humza
              Iqbal.
            </p>

            <p>
              We’d like to acknowledge Brice Menard, who encouraged us to study
              the statistics of neuron activations and provided more general
              comments as well. He was the first person we are aware of that
              realized that many neurons follow an exponential distribution.
            </p>

            <p>
              We also really appreciate the conversations in the #circuits
              channel of the open{' '}
              <a href="http://slack.distill.pub/">Distill Slack</a>, which at
              the time of publishing contains more than 300 people.
            </p>
          </d-appendix>
        </body>
      </Html>
    )
  }
}

export default MyDocument
