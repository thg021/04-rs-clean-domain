import { expect, it, describe, beforeEach } from 'vitest'
import { CreateAnswerUseCase } from './create-answer'
import { InMemoryAnswersRepository } from 'test/repositories/in-memory-question-repository copy'

let inMemoryAnswersRepository: InMemoryAnswersRepository
let sut: CreateAnswerUseCase

describe('Create a answer', () => {
  beforeEach(() => {
    inMemoryAnswersRepository = new InMemoryAnswersRepository()
    sut = new CreateAnswerUseCase(inMemoryAnswersRepository)
  })
  it('should be able to create an Question', async () => {
    const { answer } = await sut.execute({
      content: 'content',
      instructorId: 'instructorId',
      questionId: 'questionId',
    })

    expect(answer.content).toEqual('content')
  })
})
