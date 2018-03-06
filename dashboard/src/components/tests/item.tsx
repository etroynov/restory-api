import * as React from 'react';
import { Col, Row, Steps, Button, Radio } from 'antd';

import Dashboard from '../layout';

const Step = Steps.Step;
const RadioGroup = Radio.Group;

const Test = ({ name, steps, step, currentStep, chosenAnswer, handleSelectAnswer, handleClickNext }) => (
  <Dashboard>
    <Row>
      <Col span={6} style={{ paddingRight: '20px' }}>
        <section
          style={{
            padding: '20px',
            background: '#ffffff',
          }}
        >
          <header
            style={{
              marginBottom: '20px',
              borderBottom: '1px solid #eeeeee',
            }}
          >
            <h3>{name}</h3>
          </header>
          <Steps direction="vertical" size="small" current={currentStep}>
            {steps.map(({ key, title }) => {
              return (<Step key={key} title={title} />);
            })}
          </Steps>
        </section>
      </Col>
      <Col span={18} style={{ paddingLeft: '20px' }}>
        <article
          style={{
            padding: '20px',
            background: '#ffffff',
          }}
        >
          <header
            style={{
              marginBottom: '20px',
              textAlign: 'center',
              borderBottom: '1px solid #eeeeee',
            }}
          >
            <h2>{step.title}</h2>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: step.question }}
            style={{
              textAlign: 'center',
            }}
          />
          <section
            className="answers"
            style={{
              display: 'block',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <RadioGroup
              onChange={handleSelectAnswer}
              value={chosenAnswer}
              style={{ textAlign: 'left' }}
            >
              {step.answers.map((answer, index) => (
                <Radio
                  key={index}
                  style={{ display: 'block', marginBottom: '20px' }}
                  value={index}
                >
                  {answer}
                </Radio>
              ))}
            </RadioGroup>
          </section>
          <footer style={{ overflow: 'hidden' }}>
            <hr
              style={{ border: 'none', borderBottom: '1px solid #eeeeee' }}
            />
            <Button
              type="primary"
              icon="arrow-right"
              onClick={handleClickNext}
              style={{ float: 'right' }}
            >
              Ответить
            </Button>
          </footer>
        </article>
      </Col>
    </Row>
  </Dashboard>
);

export default Test;
