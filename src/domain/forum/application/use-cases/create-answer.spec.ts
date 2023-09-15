import { expect, test } from 'vitest'
import { CreateAnswerUseCase } from './create-answer'
import { AnswersRepository } from '@/forum/application/repositories/answers-repository'
import { Answer } from '@/forum/enterprise/entities/answer'

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {},
}
test('create an answer', async () => {
  const createAnswer = new CreateAnswerUseCase(fakeAnswerRepository)
  const answer = await createAnswer.execute({
    content: 'content',
    instructorId: 'instructorId',
    questionId: 'questionId',
  })

  expect(answer.content).toEqual('content')
})
