import { expect, test } from 'vitest'
import { QuestionsRepository } from '../repositories/question-repository'
import { Question } from '../../enterprise/entities/question'
import { CreateQuestionUseCase } from './create-question'

const fakeQuestionRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}
test('create an Question', async () => {
  const createQuestion = new CreateQuestionUseCase(fakeQuestionRepository)
  const { question } = await createQuestion.execute({
    authorId: '1',
    title: 'questao',
    content: 'conteudo',
  })

  expect(question.id).toBeTruthy()
})
