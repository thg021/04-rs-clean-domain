import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '@/forum/application/repositories/answers-repository'
import { Answer } from '@/forum/enterprise/entities/answer'

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => { },
}
test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswerRepository)
  const answer = await answerQuestion.execute({
    content: 'content',
    instructorId: 'instructorId',
    questionId: 'questionId',
  })

  expect(answer.content).toEqual('content')
})
