/**
 * Vendor
 */

import * as React from 'react';

/**
 * Components
 */

import Item from '../../components/tests/item';
import Result from '../../components/tests/result';

/**
 * Expo
 */

export default class extends React.Component<{}, {}> {
  state = {
    chosenAnswer: 0,
    userAnswers: [],
    currentStep: 0,
    inProgress: true,
    name: 'Тест по теме: Охрана труда',
    description: '',
    steps: [
      {
        key: 0,
        title: 'Вопрос 1',
        question:
          'Что из перечисленного определяется как "обстановка на определенной территории, сложившаяся в результате аварии, опасного природного явления, катастрофы, стихийного или иного бедствия, которые могут повлечь или повлекли за собой человеческие жертвы, ущерб здоровью людей или окружающей среде, значительные материальные потери и нарушение условий жизнедеятельности людей?"',
        answers: [
          'Чрезвычайная ситуация',
          'Зона чрезвычайной ситуации',
          'Чрезвычайное происшествие',
        ],
        rightAnswer: 1,
      },
      {
        key: 1,
        title: 'Вопрос 2',
        question:
          'Что из перечисленного не входит в основные мероприятия, проводимые органами управления и силами единой системы предупреждения и ликвидации чрезвычайных ситуаций, в режиме чрезвычайной ситуации?',
        answers: [
          'Восполнение при необходимости резервов материальных ресурсов, созданных для ликвидации чрезвычайных ситуаций',
          'Непрерывный контроль за состоянием окружающей среды, мониторинг и прогнозирование развития возникших чрезвычайных ситуаций, а также оценка их социально-экономических последствий',
          'Проведение мероприятий по защите населения и территорий от чрезвычайных ситуаций',
          'Непрерывный сбор, анализ и обмен информацией об обстановке в зоне чрезвычайной ситуации и в ходе проведения работ по ее ликвидации',
          'Проведение мероприятий по жизнеобеспечению населения в чрезвычайной ситуации'
        ],
        rightAnswer: 0,
      },
    ],
  };

  handleClickNext = () => {
    const { steps, currentStep, chosenAnswer, userAnswers } = this.state;

    return this.setState({
      currentStep: currentStep + 1,
      userAnswers: [...userAnswers, { ...steps[currentStep], userAnswer: chosenAnswer }],
      inProgress: currentStep >= steps.length - 1 ? false : true,
    });
  }

  handleSelectAnswer = (e) => {
    this.setState({ chosenAnswer: e.target.value });
  }

  render() {
    const { inProgress, name, steps, currentStep, chosenAnswer, userAnswers } = this.state;
    const step = steps[currentStep];

    console.info(userAnswers);

    return (
      <div>
        {inProgress ? (
          <Item
            steps={steps}
            step={step}
            currentStep={currentStep}
            chosenAnswer={chosenAnswer}
            handleSelectAnswer={this.handleSelectAnswer}
            handleClickNext={this.handleClickNext}
          />
        ) : (
          <Result name={name} steps={userAnswers} />
        )}
      </div>
    );
  }
}
