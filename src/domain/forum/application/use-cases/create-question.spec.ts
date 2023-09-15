import { beforeEach, describe, expect, it, test } from 'vitest'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-question-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let sut: CreateQuestionUseCase

describe('Create a question', () => {
  beforeEach(() => {
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository()
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })
  it('should be able to create an Question', async () => {
    const { question } = await sut.execute({
      authorId: '1',
      title: 'questao',
      content: 'conteudo',
    })

    expect(question.id).toBeTruthy()
  })
})
