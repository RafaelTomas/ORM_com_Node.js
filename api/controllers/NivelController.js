// const database = require('../models')

const Services = require('../services/Services')
const niveisServices = new Services('Niveis')

class NivelController {
  static async pegaTodosOsNiveis(req, res){
    try {
      const todosOsNiveis = await niveisServices.pegaTodosOsRegistros()
      return res.status(200).json(todosOsNiveis)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmNivel(req, res) {
    const { id } = req.params
    try {
      const umNivel = await niveisServices.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umNivel)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaNivel(req, res) {
    const novoNivel = req.body
    try {
      const novoNivelCriado = await niveisServices.create(novoNivel)
      return res.status(200).json(novoNivelCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaNivel(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await niveisServices.update(novasInfos, { where: { id: Number(id) }})
      const nivelAtualizado = await niveisServices.findOne( { where: { id: Number(id) }})
      return res.status(200).json(nivelAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaNivel(req, res) {
    const { id } = req.params
    try {
      await niveisServices.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async restauraNivel(req, res){
    const { id } = req.params
    try {
      await niveisServices.restore( {where: {id: Number(id) } } )
      return res.status(200).json({ message: `id ${id} restored`})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = NivelController